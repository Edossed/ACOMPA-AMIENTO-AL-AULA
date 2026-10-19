/* Funciones compartidas: almacenamiento local, conexión con Apps Script e informe imprimible. */
window.APP = (function () {
  const { esc, nivelNombre } = window.RUB;
  const R = window.RUBRICA;
  const C = window.CONFIG;

  const store = {
    get(k, def) { try { const v = localStorage.getItem(k); return v == null ? def : JSON.parse(v); } catch (e) { return def; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) { } }
  };

  const conectado = () => !!(C.API_URL && C.API_URL.trim());

  // POST con text/plain para evitar preflight CORS en Apps Script.
  async function api(action, data) {
    if (!conectado()) throw new Error("No hay conexión configurada con Google Drive (API_URL).");
    const res = await fetch(C.API_URL, { method: "POST", body: JSON.stringify({ action, ...data }) });
    const json = await res.json();
    if (!json.ok) throw new Error(json.error || "Error en el servidor");
    return json;
  }

  function uid() { return "obs-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 7); }

  function fechaLarga(iso) {
    if (!iso) return "—";
    const [y, m, d] = iso.split("-").map(Number);
    return new Date(y, m - 1, d).toLocaleDateString("es-CL", { day: "numeric", month: "long", year: "numeric" });
  }

  // Retroalimentación automática a partir de los niveles marcados
  function generarRetro(obs) {
    const fort = [], mejora = [], sug = [];
    window.RUB.indicadores.forEach(i => {
      const n = obs.niveles[i.id];
      const com = (obs.comentarios[i.id] || "").trim();
      if (n >= 3) {
        fort.push(`• ${i.nombre} (${nivelNombre(n)}): ${i.niveles[n - 1]}${com ? " Evidencia: " + com : ""}`);
      } else if (n === 1 || n === 2) {
        mejora.push(`• ${i.nombre} (${nivelNombre(n)}): ${i.niveles[n - 1]}${com ? " Evidencia: " + com : ""}`);
      }
    });
    // Sugerencias solo para los 5 indicadores más descendidos (primero Por desarrollar)
    window.RUB.indicadores.filter(i => obs.niveles[i.id] === 1).concat(window.RUB.indicadores.filter(i => obs.niveles[i.id] === 2))
      .slice(0, 5).forEach(i => sug.push(`${i.nombre}:\n  – ${i.sug.slice(0, 2).join("\n  – ")}`));
    if (!sug.length) {
      // Todo en nivel 3 o 4: proponer avanzar a Destacado en los indicadores de nivel 3
      window.RUB.indicadores.filter(i => obs.niveles[i.id] === 3).slice(0, 3).forEach(i => {
        sug.push(`${i.nombre} (para avanzar a Destacado):\n  – ${i.sug[i.sug.length - 1]}`);
      });
    }
    return {
      fortalezas: fort.join("\n") || "• (Sin indicadores en nivel Desarrollado o Destacado)",
      mejoras: mejora.join("\n") || "• No se registran indicadores en nivel Por desarrollar o En desarrollo.",
      sugerencias: sug.join("\n")
    };
  }

  // HTML autocontenido del informe (se usa para imprimir y para el PDF en Drive).
  // Solo tablas y CSS simple, compatible con la conversión a PDF de Google.
  function informeHTML(obs) {
    const sel = (n, k) => n === k ? `<td class="x x${k}">${k === 0 ? "N/O" : "X"}</td>` : `<td class="x"></td>`;
    // Resumen sin puntaje: cantidad de indicadores marcados en cada nivel
    const cuenta = (d, k) => window.RUB.indicadores.filter(i => i.dim === d.id && obs.niveles[i.id] === k).length;
    const dimsRows = R.dimensiones.map(d => `<tr><td>${esc(d.nombre)}</td>${[1, 2, 3, 4, 0].map(k => `<td class="c">${cuenta(d, k) || ""}</td>`).join("")}</tr>`).join("");
    const tablas = R.dimensiones.map(d => {
      const filas = d.sub.map(s => `<tr class="subrow"><td colspan="7">${s.id} ${esc(s.nombre)}</td></tr>` + s.ind.map(i => {
        const n = obs.niveles[i.id] ?? null;
        return `<tr><td class="ind"><b>${i.id}</b> ${esc(i.nombre)}</td>${sel(n, 1)}${sel(n, 2)}${sel(n, 3)}${sel(n, 4)}${sel(n, 0)}<td class="com">${esc(obs.comentarios[i.id] || "")}</td></tr>`;
      }).join("")).join("");
      return `<h3>${d.id.replace("D", "Dimensión ")}: ${esc(d.nombre)} <span class="src">(${esc(d.fuente)})</span></h3>
      <table class="rub"><thead><tr><th style="width:30%">Indicador</th><th class="x">PD</th><th class="x">ED</th><th class="x">D</th><th class="x">DS</th><th class="x">N/O</th><th>Evidencias / comentarios</th></tr></thead><tbody>${filas}</tbody></table>`;
    }).join("");
    const nl = s => esc(s || "").replace(/\n/g, "<br>");
    const ev = R.evidenciasIA.map(e => `<span class="ck">${(obs.evidenciasIA || []).includes(e) ? "[X]" : "[&nbsp;&nbsp;]"} ${esc(e)}</span>`).join(" ");
    const usos = (obs.usosIA || []).join(", ") || "—";
    return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Pauta ${esc(obs.docente)} ${esc(obs.fecha)}</title>
<style>
  @page { size: A4; margin: 14mm 12mm; }
  body { font-family: Arial, Helvetica, sans-serif; font-size: 9.5pt; color: #111; margin: 0; }
  h1 { font-size: 13pt; margin: 0 0 2px; }
  h2 { font-size: 11pt; margin: 14px 0 6px; border-bottom: 1.5px solid #1f5fae; padding-bottom: 2px; color: #1f5fae; }
  h3 { font-size: 10pt; margin: 12px 0 4px; }
  .src { font-weight: normal; color: #666; font-size: 8.5pt; }
  .head { border-bottom: 2px solid #111; padding-bottom: 6px; margin-bottom: 8px; }
  .head .col { font-size: 9pt; color: #444; }
  table { border-collapse: collapse; width: 100%; }
  td, th { border: 1px solid #999; padding: 3px 5px; vertical-align: top; }
  th { background: #e9eef6; font-size: 8.5pt; text-align: left; }
  .datos td { border: 1px solid #bbb; }
  .datos .k { background: #f2f4f7; font-weight: bold; width: 16%; font-size: 8.5pt; }
  .c { text-align: center; }
  .x { width: 6%; text-align: center; font-weight: bold; font-size: 8.5pt; }
  .x1 { background: #f6cfcd; } .x2 { background: #fbe3dc; } .x3 { background: #dbe8f8; } .x4 { background: #b9d2f2; } .x0 { background: #eee; }
  .subrow td { background: #f2f4f7; font-weight: bold; font-size: 8.5pt; }
  .ind { font-size: 9pt; }
  .com { font-size: 8.5pt; color: #222; }
  .ck { display: inline-block; margin-right: 12px; font-size: 9pt; }
  .box { border: 1px solid #999; padding: 6px 8px; min-height: 30px; margin-bottom: 6px; font-size: 9pt; }
  .box b { display: block; margin-bottom: 2px; }
  .lines div { border-bottom: 1px solid #999; height: 20px; }
  .firmas { margin-top: 34px; }
  .firmas td { border: 0; text-align: center; width: 33%; padding: 0 10px; font-size: 9pt; }
  .firmas .l { border-top: 1px solid #111; padding-top: 4px; }
  .leyenda { font-size: 8pt; color: #555; margin-top: 4px; }
  tr { page-break-inside: avoid; }
  .nobreak { page-break-inside: avoid; }
</style></head><body>
<div class="head">
  <div class="col">${esc(C.COLEGIO)} · Unidad Técnico Pedagógica · ${esc(String(C.ANIO))}</div>
  <h1>Pauta de Observación y Retroalimentación de Aula</h1>
  <div class="col">Enfoque Docente (Agencia de Calidad de la Educación) + Innovación pedagógica: Integración pedagógica de la IA</div>
</div>
<table class="datos">
  <tr><td class="k">Docente</td><td>${esc(obs.docente)}${obs.coDocente ? " <span class='src'>(clase compartida con " + esc(obs.coDocente) + ")</span>" : ""}</td><td class="k">Grupo CPA</td><td>${esc(obs.grupo || "—")}</td></tr>
  <tr><td class="k">Curso</td><td>${esc(obs.curso)}</td><td class="k">Asignatura</td><td>${esc(obs.asignatura)}</td></tr>
  <tr><td class="k">Fecha</td><td>${fechaLarga(obs.fecha)}</td><td class="k">Horario</td><td>${esc(obs.horaInicio || "")}${obs.horaFin ? " – " + esc(obs.horaFin) : ""}</td></tr>
  <tr><td class="k">Observador/a</td><td colspan="3">${esc(obs.observador)}</td></tr>
  <tr><td class="k">Objetivo de la clase</td><td colspan="3">${nl(obs.objetivo)}</td></tr>
  <tr><td class="k">Herramientas de IA</td><td colspan="3">${esc(obs.herramientasIA || "—")} <span class="src">· Uso en: ${esc(usos)}</span></td></tr>
  <tr><td class="k">Evidencias IA</td><td colspan="3">${ev}</td></tr>
</table>

<h2>Resumen por dimensión</h2>
<table><thead><tr><th>Dimensión</th><th class="x">PD</th><th class="x">ED</th><th class="x">D</th><th class="x">DS</th><th class="x">N/O</th></tr></thead>
<tbody>${dimsRows}</tbody></table>
<div class="leyenda">Número de indicadores observados en cada nivel. PD = Por desarrollar · ED = En desarrollo · D = Desarrollado (referente satisfactorio) · DS = Destacado · N/O = No observado. La pauta no asigna puntaje.</div>

<h2>Registro de observación</h2>
${tablas}

<div class="nobreak">
<h2>Retroalimentación</h2>
<div class="box"><b>Fortalezas observadas</b>${nl(obs.retro.fortalezas)}</div>
<div class="box"><b>Aspectos a mejorar</b>${nl(obs.retro.mejoras)}</div>
<div class="box"><b>Sugerencias de acción</b>${nl(obs.retro.sugerencias)}</div>
${obs.retro.general ? `<div class="box"><b>Comentario general</b>${nl(obs.retro.general)}</div>` : ""}
<div class="box"><b>Acuerdos y compromisos</b>${nl(obs.retro.acuerdos) || "&nbsp;"}</div>
<table class="datos"><tr><td class="k">Fecha de retroalimentación</td><td>${obs.retro.fechaRetro ? fechaLarga(obs.retro.fechaRetro) : ""}</td><td class="k">Fecha de seguimiento</td><td>${obs.retro.fechaSeguimiento ? fechaLarga(obs.retro.fechaSeguimiento) : ""}</td></tr></table>
</div>

<div class="nobreak">
<h3>Reflexión y comentarios del/la docente</h3>
<div class="lines"><div></div><div></div><div></div><div></div></div>
<table class="firmas"><tr>
  <td><div class="l">${esc(obs.docente)}<br>Docente observado/a</div></td>
  <td><div class="l">${esc(obs.observador)}<br>Observador/a</div></td>
  <td><div class="l">Jefatura UTP</div></td>
</tr></table>
<div class="leyenda" style="text-align:center;margin-top:10px">La firma del/la docente indica toma de conocimiento de la observación y retroalimentación. ID: ${esc(obs.id)}</div>
</div>
</body></html>`;
  }

  // Imprime un HTML usando un iframe oculto
  function imprimirHTML(html) {
    const f = document.createElement("iframe");
    f.style.cssText = "position:fixed;right:0;bottom:0;width:0;height:0;border:0";
    document.body.appendChild(f);
    f.srcdoc = html;
    f.onload = () => { setTimeout(() => { f.contentWindow.focus(); f.contentWindow.print(); setTimeout(() => f.remove(), 2000); }, 150); };
  }

  function toast(msg, ms = 3200) {
    const t = document.createElement("div");
    t.className = "toast"; t.textContent = msg; t.setAttribute("role", "status");
    document.body.appendChild(t); setTimeout(() => t.remove(), ms);
  }

  function modal(html, opts = {}) {
    const bg = document.createElement("div");
    bg.className = "modal-bg";
    bg.innerHTML = `<div class="modal ${opts.wide ? "wide" : ""}" role="dialog" aria-modal="true">${html}</div>`;
    document.body.appendChild(bg);
    const close = () => bg.remove();
    bg.addEventListener("click", e => { if (e.target === bg && !opts.persist) close(); });
    bg.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", close));
    return { el: bg, close };
  }

  // Docentes en "stand by": se marcan escribiendo "Stand by" en la columna Rol de la hoja Nomina
  const enStandBy = n => /stand\s*-?\s*by/i.test((n && n.rol) || "");

  return { store, api, conectado, uid, enStandBy, fechaLarga, generarRetro, informeHTML, imprimirHTML, toast, modal };
})();
