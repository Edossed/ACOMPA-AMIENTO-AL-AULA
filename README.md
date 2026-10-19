# Pauta de Acompañamiento de Aula

Pauta única de observación y retroalimentación de aula del Colegio María Montessori. Integra dos marcos:

- **Enfoque Docente** (Agencia de Calidad de la Educación, 2025). Incluye las dimensiones 1 a 3, excepto los indicadores exclusivos de formación TP.
- **Integración pedagógica de la IA**, eje de **Innovación pedagógica** del establecimiento. Corresponde a la dimensión 4, con 5 indicadores evaluados en los mismos 4 niveles.

## Páginas

| Página | Para quién | Qué hace |
|---|---|---|
| `index.html` | Equipo observador | Permite elegir al docente de la nómina, marcar niveles y dejar evidencias. Genera la retroalimentación, imprime la pauta con líneas de firma y la guarda en Drive (planilla + PDF). Funciona sin internet: las observaciones quedan en cola y se envían cuando vuelve la conexión. |
| `utp.html` | Solo UTP (requiere clave) | Muestra el consolidado por dimensión, subdimensión, indicador, docente y grupo CPA, junto con el seguimiento de la meta de innovación pedagógica (uso de IA). Genera informes privados (institucional e individual) y exporta los datos en CSV. |

## Datos y privacidad

Este repositorio es público y **no contiene datos**. Las observaciones, la nómina y los PDF se guardan solo en Google Drive, en la cuenta del colegio, a través de Google Apps Script. El código de observadores y la clave UTP se verifican en el servidor.

La configuración está en `assets/config.js`, en el campo `API_URL`. Las instrucciones completas están en `INSTALACION.md`, en la carpeta del proyecto.

## Estructura

```
index.html          Pauta de observación
utp.html            Área privada UTP
assets/rubrica.js   Indicadores, descriptores de nivel y sugerencias (editar aquí la pauta)
assets/common.js    Conexión con Apps Script, retroalimentación automática e informe imprimible
assets/pauta.js     Lógica de la pauta
assets/utp.js       Análisis e informes UTP
assets/config.js    URL del servicio y datos del colegio
```
