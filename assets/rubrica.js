/* Pauta integrada de acompañamiento de aula
 * Dimensiones 1–3: Pauta de observación y retroalimentación Enfoque Docente
 * (Agencia de Calidad de la Educación, 2025). Se omiten los indicadores
 * exclusivos de formación TP (1.1.4, 3.1.3, 3.1.4).
 * Dimensión 4: Innovación pedagógica · Integración pedagógica de la IA,
 * indicadores elaborados por el establecimiento. Mismos 4 niveles de desarrollo.
 * Las sugerencias de acción son orientaciones del equipo de gestión, inspiradas
 * en ambos documentos.
 */
window.RUBRICA = {
  version: "2026-10",
  niveles: [
    { n: 1, nombre: "Por desarrollar", corto: "PD", def: "No se observan acciones asociadas al indicador." },
    { n: 2, nombre: "En desarrollo", corto: "ED", def: "Se observan acciones poco efectivas asociadas al indicador." },
    { n: 3, nombre: "Desarrollado", corto: "D", def: "Se observan acciones efectivas. Es el referente satisfactorio." },
    { n: 4, nombre: "Destacado", corto: "DS", def: "Cumple el nivel Desarrollado e incorpora acciones innovadoras que promueven el protagonismo estudiantil." }
  ],
  dimensiones: [
    {
      id: "D1", nombre: "Gestión del tiempo", fuente: "Enfoque Docente",
      sub: [{
        id: "1.1", nombre: "Uso eficiente del tiempo",
        ind: [
          {
            id: "1.1.1", nombre: "Implementación de rutinas",
            desc: "Rutinas estructuradas y consistentes que facilitan el desarrollo fluido de las actividades, fomentan la autonomía y el trabajo colaborativo e individual.",
            niveles: [
              "No se observa la implementación de rutinas durante la clase.",
              "Se observan rutinas poco efectivas que no facilitan el desarrollo de las actividades.",
              "Se observan rutinas efectivas que ayudan a facilitar el desarrollo de las actividades.",
              "Además, se observan rutinas innovadoras que permiten optimizar el desarrollo de las actividades."
            ],
            sug: [
              "Establecer y visibilizar rutinas de inicio, transición y cierre (por ejemplo, agenda de la clase en la pizarra).",
              "Modelar y practicar explícitamente las rutinas al comienzo, reforzándolas de forma positiva.",
              "Asignar roles rotativos a estudiantes (encargado de materiales, del tiempo, de la tecnología) para promover autonomía."
            ]
          },
          {
            id: "1.1.2", nombre: "Organización de los espacios educativos y recursos para el aprendizaje",
            desc: "Gestión y distribución eficiente de espacios y recursos materiales, didácticos y tecnológicos, pertinente a las características de los estudiantes y al tipo de actividad.",
            niveles: [
              "No se observan acciones para organizar los espacios y recursos educativos.",
              "Se observan acciones poco efectivas para organizar los espacios y recursos educativos.",
              "Se observan acciones efectivas para organizar espacios y recursos que facilitan las actividades.",
              "Además, se observan acciones innovadoras para organizar espacios y recursos que optimizan las actividades."
            ],
            sug: [
              "Preparar y probar con anticipación los recursos tecnológicos (proyector, conexión, plataformas, cuentas).",
              "Adecuar la disposición del mobiliario al tipo de actividad (individual, parejas, grupos).",
              "Invitar a los estudiantes a proponer y gestionar la organización de materiales y espacios."
            ]
          },
          {
            id: "1.1.3", nombre: "Tiempo para el aprendizaje",
            desc: "Gestión eficaz del tiempo dedicado al aprendizaje: actividades continuas, comunicación clara del tiempo por tarea y ajuste del ritmo, evitando inactividad o sobrecarga.",
            niveles: [
              "No se observan acciones para que los estudiantes utilicen el tiempo en actividades de aprendizaje.",
              "Se observan acciones poco efectivas para que los estudiantes utilicen el tiempo en actividades de aprendizaje.",
              "Se observan acciones efectivas para asegurar que los estudiantes utilicen el tiempo en actividades de aprendizaje.",
              "Además, se observan acciones innovadoras para que los estudiantes utilicen el tiempo principalmente en aprender."
            ],
            sug: [
              "Comunicar el tiempo asignado a cada actividad y usar un temporizador visible.",
              "Planificar actividades de extensión para quienes terminan antes y apoyos para quienes necesitan más tiempo.",
              "Reducir los tiempos muertos en transiciones y en la puesta en marcha de recursos digitales."
            ]
          }
        ]
      }]
    },
    {
      id: "D2", nombre: "Ambiente socioafectivo para el aprendizaje", fuente: "Enfoque Docente",
      sub: [
        {
          id: "2.1", nombre: "Relaciones seguras y sensibles",
          ind: [
            {
              id: "2.1.1", nombre: "Altas expectativas educativas",
              desc: "Comunicar confianza en la capacidad de aprendizaje de los estudiantes, abriendo espacios para reconocer errores y pedir apoyo como oportunidad de aprendizaje.",
              niveles: [
                "No se observan acciones para promover altas expectativas educativas.",
                "Se observan acciones poco efectivas para promover altas expectativas educativas.",
                "Se observan acciones efectivas para promover altas expectativas educativas.",
                "Además, se observan acciones innovadoras para promover altas expectativas educativas."
              ],
              sug: [
                "Verbalizar confianza en las capacidades de todos los estudiantes y plantear desafíos alcanzables pero exigentes.",
                "Tratar el error como oportunidad de aprendizaje, analizándolo en conjunto.",
                "Distribuir la participación de forma equitativa (por ejemplo, palitos con nombres) y no solo a quienes levantan la mano."
              ]
            },
            {
              id: "2.1.2", nombre: "Responsividad",
              desc: "Atención y respuesta oportuna a necesidades e intereses académicos, socioemocionales o físicos, con apoyo individualizado y ajuste de las actividades.",
              niveles: [
                "No se observan acciones para identificar y atender las necesidades de los estudiantes.",
                "Se observan acciones poco efectivas para identificar y atender necesidades y solicitudes.",
                "Se observan acciones efectivas para identificar y atender necesidades, solicitudes y diversos intereses.",
                "Además, se observan acciones innovadoras para identificar y atender necesidades, solicitudes e intereses."
              ],
              sug: [
                "Circular por la sala durante el trabajo autónomo para detectar y atender dudas oportunamente.",
                "Ajustar la actividad en curso cuando se evidencian dificultades o desinterés.",
                "Ofrecer opciones de respuesta o de actividad según intereses y necesidades (principios DUA)."
              ]
            },
            {
              id: "2.1.3", nombre: "Comodidad de los y las estudiantes",
              desc: "Actividades que promueven que los estudiantes se sientan cómodos y seguros para participar activamente y adherir con tranquilidad a las propuestas.",
              niveles: [
                "No se observan acciones para que los estudiantes se sientan cómodos durante la clase.",
                "Se observan acciones poco efectivas para que los estudiantes se sientan cómodos.",
                "Se observan acciones efectivas que permiten que los estudiantes se sientan cómodos.",
                "Además, se observan acciones innovadoras para asegurar que los estudiantes se sientan cómodos."
              ],
              sug: [
                "Generar instancias de participación de bajo riesgo (pensar-parejas-compartir, pizarras individuales).",
                "Acoger con calidez las intervenciones, validando el esfuerzo y no solo la respuesta correcta.",
                "Acordar con el curso normas de participación que den seguridad para opinar."
              ]
            }
          ]
        },
        {
          id: "2.2", nombre: "Convivencia armónica",
          ind: [
            {
              id: "2.2.1", nombre: "Comunicación respetuosa",
              desc: "Trato respetuoso entre todas las personas del espacio educativo, con lenguaje verbal y no verbal respetuoso en las interacciones.",
              niveles: [
                "No se observan acciones para fomentar una comunicación respetuosa.",
                "Se observan acciones poco efectivas para fomentar una comunicación respetuosa.",
                "Se observan acciones efectivas que logran fomentar una comunicación respetuosa.",
                "Además, se observan acciones innovadoras para fomentar una comunicación respetuosa."
              ],
              sug: [
                "Modelar un lenguaje respetuoso y explicitar normas de escucha activa y turnos de habla.",
                "Intervenir de manera formativa y oportuna ante faltas de respeto entre estudiantes.",
                "Reconocer públicamente las interacciones respetuosas y colaborativas."
              ]
            },
            {
              id: "2.2.2", nombre: "Valoración de la diversidad",
              desc: "Reconocimiento, respeto y valoración de las diferencias individuales, mediando conductas o expresiones discriminatorias.",
              niveles: [
                "No se observan acciones para valorar la diversidad de los estudiantes.",
                "Se observan acciones poco efectivas para valorar la diversidad.",
                "Se observan acciones efectivas para promover y valorar la diversidad.",
                "Además, se observan acciones innovadoras para promover y valorar la diversidad."
              ],
              sug: [
                "Usar un lenguaje inclusivo que no reproduzca estereotipos de género, culturales o sociales.",
                "Incorporar ejemplos, imágenes y recursos que representen la diversidad del curso.",
                "Diversificar las formas de representación, expresión y participación (DUA)."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "D3", nombre: "Apoyo al aprendizaje profundo", fuente: "Enfoque Docente",
      sub: [
        {
          id: "3.1", nombre: "Construcción de sentidos",
          ind: [
            {
              id: "3.1.1", nombre: "Conexión con las experiencias previas",
              desc: "Conexiones significativas entre contenidos y actividades con las experiencias de los estudiantes y su entorno.",
              niveles: [
                "No se observan acciones para que los estudiantes vinculen sus experiencias con la actividad.",
                "Se observan acciones poco efectivas para que los estudiantes vinculen sus experiencias.",
                "Se observan acciones efectivas para vincular experiencias y aprendizajes previos con la actividad.",
                "Además, se observan acciones innovadoras para vincular experiencias y aprendizajes previos."
              ],
              sug: [
                "Activar conocimientos previos con preguntas o situaciones cercanas al contexto de los estudiantes.",
                "Explicitar el propósito de la clase y su relación con la vida cotidiana.",
                "Invitar a los estudiantes a aportar aprendizajes construidos dentro y fuera del colegio."
              ]
            },
            {
              id: "3.1.2", nombre: "Organización o práctica de lo aprendido",
              desc: "Oportunidades para que los estudiantes pongan en práctica, ejerciten y organicen cognitivamente lo aprendido.",
              niveles: [
                "No se observan acciones para que los estudiantes apliquen de manera práctica sus aprendizajes.",
                "Se observan acciones poco efectivas para que los estudiantes apliquen sus aprendizajes.",
                "Se observan acciones efectivas para que los estudiantes apliquen los aprendizajes logrados.",
                "Además, se observan acciones innovadoras para que los estudiantes apliquen los aprendizajes logrados."
              ],
              sug: [
                "Incluir práctica guiada y luego práctica independiente con complejidad creciente.",
                "Usar organizadores gráficos para que los estudiantes estructuren lo aprendido.",
                "Plantear tareas de aplicación auténticas o de resolución de problemas."
              ]
            }
          ]
        },
        {
          id: "3.2", nombre: "Acompañamiento formativo",
          ind: [
            {
              id: "3.2.1", nombre: "Monitoreo del proceso de aprendizaje",
              desc: "Acompañar y recoger evidencia del progreso y la comprensión para identificar dificultades y ofrecer apoyo.",
              niveles: [
                "No se observan acciones de seguimiento a los niveles de comprensión.",
                "Se observan acciones poco efectivas para hacer seguimiento a la comprensión.",
                "Se observan acciones efectivas para hacer seguimiento y recoger evidencias de comprensión.",
                "Además, se observan acciones innovadoras para hacer seguimiento y recoger evidencias de comprensión."
              ],
              sug: [
                "Usar estrategias de evaluación formativa en distintos momentos (tarjetas, pulgares, ticket de salida).",
                "Formular preguntas que exijan explicar el razonamiento, no solo responder sí o no.",
                "Registrar la evidencia recogida para ajustar la enseñanza en la misma clase o la siguiente."
              ]
            },
            {
              id: "3.2.2", nombre: "Retroalimentación del proceso de aprendizaje",
              desc: "Información detallada y constructiva sobre logros y dificultades, con sugerencias oportunas de mejora en diálogo con los estudiantes.",
              niveles: [
                "No se observan acciones para retroalimentar a los estudiantes.",
                "Se observan acciones poco efectivas para retroalimentar a los estudiantes.",
                "Se observan acciones efectivas para retroalimentar sobre aspectos logrados o no logrados.",
                "Además, se observan acciones innovadoras para retroalimentar sobre aspectos logrados o no logrados."
              ],
              sug: [
                "Entregar retroalimentación específica y descriptiva, referida al objetivo y no solo a la nota.",
                "Dar tiempo para que los estudiantes usen la retroalimentación y mejoren su trabajo.",
                "Promover la retroalimentación entre pares con criterios claros."
              ]
            }
          ]
        },
        {
          id: "3.3", nombre: "Pensamiento de orden superior",
          ind: [
            {
              id: "3.3.1", nombre: "Oportunidad de pensar creativamente",
              desc: "Oportunidades para que los estudiantes desarrollen soluciones originales y expresen sus propuestas de manera original.",
              niveles: [
                "No se observan acciones para que los estudiantes formulen ideas o elaboren productos originales.",
                "Se observan acciones poco efectivas para que los estudiantes formulen ideas o productos originales.",
                "Se observan acciones efectivas para que los estudiantes formulen ideas o productos originales.",
                "Además, se observan acciones innovadoras para que los estudiantes formulen ideas o productos originales."
              ],
              sug: [
                "Plantear tareas abiertas con más de una solución posible.",
                "Permitir que los estudiantes elijan el formato de su producto (afiche, cómic, audio, maqueta).",
                "Usar la IA como punto de partida para que los estudiantes mejoren, transformen o superen una propuesta."
              ]
            },
            {
              id: "3.3.2", nombre: "Oportunidad de pensar críticamente",
              desc: "Promover que los estudiantes analicen problemas desde diversas perspectivas, argumenten, contraargumenten y tomen decisiones informadas.",
              niveles: [
                "No se observan acciones para que los estudiantes analicen problemáticas y argumenten.",
                "Se observan acciones poco efectivas para que los estudiantes analicen y argumenten.",
                "Se observan acciones efectivas para que los estudiantes analicen, argumenten y contraargumenten.",
                "Además, se observan acciones innovadoras para que los estudiantes analicen, argumenten y contraargumenten."
              ],
              sug: [
                "Formular preguntas de por qué, cómo y qué pasaría si, que exijan fundamentar.",
                "Contrastar fuentes o puntos de vista, incluyendo respuestas generadas por IA, para evaluar su validez.",
                "Organizar debates o discusiones breves con roles definidos."
              ]
            },
            {
              id: "3.3.3", nombre: "Oportunidad de pensar metacognitivamente",
              desc: "Oportunidades de trabajo autónomo o autorregulado con herramientas para planificar, monitorear, autoevaluarse y coevaluarse.",
              niveles: [
                "No se observan acciones para que los estudiantes reflexionen sobre cómo están aprendiendo.",
                "Se observan acciones poco efectivas para que los estudiantes reflexionen sobre cómo aprenden.",
                "Se observan acciones efectivas para que reflexionen, identifiquen áreas de mejora y ajusten estrategias.",
                "Además, se observan acciones innovadoras para que reflexionen, identifiquen áreas de mejora y ajusten estrategias."
              ],
              sug: [
                "Incluir preguntas metacognitivas en el cierre (¿qué aprendí?, ¿cómo lo aprendí?, ¿qué me costó?).",
                "Usar pautas de autoevaluación y coevaluación con criterios comprensibles.",
                "Pedir a los estudiantes que reflexionen sobre cómo les ayudó (o no) la herramienta de IA en su aprendizaje."
              ]
            }
          ]
        }
      ]
    },
    {
      id: "D4", nombre: "Integración pedagógica de la Inteligencia Artificial", fuente: "Innovación pedagógica",
      sub: [
        {
          id: "4.1", nombre: "Diseño y preparación con IA",
          ind: [
            {
              id: "4.1.1", nombre: "Planificación apoyada con IA",
              desc: "La planificación de la clase se elabora o mejora con apoyo de IA, coherente con el objetivo de aprendizaje y revisada críticamente por el docente.",
              evidencia: true,
              niveles: [
                "No se evidencia uso de IA en la planificación de la clase.",
                "Se usa IA en la planificación, pero el resultado es genérico, poco coherente con el objetivo o sin adecuación al curso.",
                "La planificación apoyada con IA es coherente con el objetivo, está contextualizada al curso y muestra revisión crítica del docente.",
                "Además, la IA se usa para diversificar la planificación (DUA, distintos ritmos o niveles) y el docente explicita sus decisiones de ajuste."
              ],
              sug: [
                "Usar instrucciones (prompts) que incluyan el objetivo de aprendizaje, el nivel, el contexto del curso y las necesidades de apoyo.",
                "Revisar y ajustar siempre la propuesta de la IA según el currículum y el conocimiento del curso.",
                "Compartir en la CPA los prompts que funcionaron y las decisiones de ajuste tomadas."
              ]
            },
            {
              id: "4.1.2", nombre: "Materiales y recursos elaborados con IA",
              desc: "Materiales, guías, imágenes, textos o presentaciones elaborados o adaptados con IA, pertinentes, de calidad verificada y accesibles para todos los estudiantes.",
              evidencia: true,
              niveles: [
                "No se observan materiales o recursos elaborados con apoyo de IA.",
                "Se observan materiales elaborados con IA poco pertinentes, con errores o sin adecuación al curso.",
                "Se observan materiales elaborados con IA pertinentes, correctos y contextualizados que apoyan el logro del objetivo.",
                "Además, los materiales ofrecen múltiples formas de representación o niveles de complejidad (DUA) y son atractivos para los estudiantes."
              ],
              sug: [
                "Verificar la exactitud de los contenidos generados antes de llevarlos al aula.",
                "Generar versiones del material con distintos niveles de lectura o apoyos visuales.",
                "Contextualizar ejemplos e imágenes a la realidad del curso y del colegio."
              ]
            }
          ]
        },
        {
          id: "4.2", nombre: "Implementación en el aula",
          ind: [
            {
              id: "4.2.1", nombre: "Uso de la IA al servicio del objetivo de aprendizaje",
              desc: "La IA se integra en la clase con un propósito pedagógico claro, aporta al logro del objetivo y no es un elemento decorativo o accesorio.",
              niveles: [
                "No se observa uso de IA durante la clase.",
                "Se usa IA en la clase, pero su aporte al objetivo de aprendizaje es poco claro o accesorio.",
                "La IA se usa con un propósito pedagógico claro y aporta efectivamente al logro del objetivo de aprendizaje.",
                "Además, el uso de la IA genera experiencias de aprendizaje desafiantes que no serían posibles sin ella."
              ],
              sug: [
                "Explicitar a los estudiantes para qué se usará la IA en la actividad.",
                "Planificar el momento de la clase en que la IA aporta más valor (inicio, desarrollo o cierre).",
                "Tener un plan alternativo ante fallas de conexión o de la herramienta."
              ]
            }
          ]
        },
        {
          id: "4.3", nombre: "Evaluación y uso ético",
          ind: [
            {
              id: "4.3.1", nombre: "Evaluación formativa apoyada con IA",
              desc: "Estrategias e instrumentos de evaluación formativa (preguntas de monitoreo, tickets de salida, rúbricas, listas de cotejo) elaborados o enriquecidos con IA, usados durante la clase para recoger evidencia del aprendizaje y ajustar la enseñanza.",
              evidencia: true,
              niveles: [
                "No se evidencia uso de IA en la evaluación formativa de la clase.",
                "Se usan instrumentos de evaluación elaborados con IA, pero son genéricos, poco alineados con el objetivo o no se usa la información para ajustar la enseñanza.",
                "La evaluación formativa apoyada con IA está alineada con el objetivo, recoge evidencia del aprendizaje durante la clase y el docente la usa para ajustar la enseñanza o retroalimentar.",
                "Además, la IA permite diversificar la evaluación formativa (distintos niveles o formatos) y promueve la autoevaluación o coevaluación de los estudiantes."
              ],
              sug: [
                "Elaborar con IA preguntas de monitoreo de distintos niveles de complejidad para usar en el desarrollo de la clase.",
                "Generar con IA tickets de salida o rúbricas y ajustarlos a los criterios y al lenguaje del curso.",
                "Analizar con apoyo de IA las respuestas de los estudiantes para decidir ajustes en la siguiente clase.",
              ]
            },
            {
              id: "4.3.2", nombre: "Uso ético, crítico y responsable de la IA",
              desc: "Se promueve un uso responsable: verificación de la información, reconocimiento de errores y sesgos, autoría y protección de datos personales.",
              niveles: [
                "No se observan acciones que promuevan un uso ético o crítico de la IA.",
                "Se mencionan aspectos éticos de la IA de forma superficial o aislada.",
                "Se modela y promueve explícitamente la verificación de información, el reconocimiento de errores o sesgos y el resguardo de datos.",
                "Además, los estudiantes reflexionan y argumentan sobre las limitaciones, los sesgos o la autoría de la IA, y construyen acuerdos de uso."
              ],
              sug: [
                "Mostrar ejemplos de errores o sesgos de la IA y analizarlos con el curso.",
                "Acordar con los estudiantes normas de uso: citar la IA, no ingresar datos personales, verificar con otras fuentes.",
                "Explicitar qué parte del trabajo es del estudiante y qué parte fue apoyada por IA."
              ]
            }
          ]
        }
      ]
    }
  ],
  // Evidencias de innovación pedagógica que el docente presenta (revisión de la clase con IA)
  evidenciasIA: [
    "Planificación elaborada o mejorada con IA",
    "Material o recurso elaborado con IA",
    "Instrumento de evaluación o retroalimentación con IA",
    "Uso de IA durante la clase",
    "Diseño trabajado en la CPA"
  ],
  usosIA: ["Planificación", "Materiales", "Evaluación", "Retroalimentación", "Desarrollo de la clase"]
};

// Utilidades compartidas
window.RUB = (function () {
  const R = window.RUBRICA;
  const indicadores = [];
  R.dimensiones.forEach(d => d.sub.forEach(s => s.ind.forEach(i => indicadores.push({ ...i, dim: d.id, dimNombre: d.nombre, sub: s.id, subNombre: s.nombre }))));
  const porId = Object.fromEntries(indicadores.map(i => [i.id, i]));
  function promedio(arr) { const v = arr.filter(x => typeof x === "number" && x > 0); return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null; }
  function promediosObs(niveles) {
    const out = {};
    R.dimensiones.forEach(d => {
      out[d.id] = promedio(indicadores.filter(i => i.dim === d.id).map(i => niveles[i.id]));
    });
    out.general = promedio(indicadores.map(i => niveles[i.id]));
    return out;
  }
  function nivelNombre(n) { const x = R.niveles.find(l => l.n === Math.round(n)); return x ? x.nombre : "—"; }
  function fmt(n) { return n == null ? "—" : n.toFixed(1).replace(".", ","); }
  function esc(s) { return String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  return { indicadores, porId, promedio, promediosObs, nivelNombre, fmt, esc };
})();
