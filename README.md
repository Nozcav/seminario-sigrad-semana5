# Seminario de Ingeniería de Software (SIGRAD) - Semana 5

Práctica de desarrollo guiado por pruebas (TDD) y control de calidad en TypeScript.

---

## Historia de usuario (HU-02)

Como coordinador, quiero que el sistema calcule el estado general de grado basándose en las encuestas de Paz y Salvo, para determinar si un estudiante puede graduarse.

### Criterio de aceptación
- Si el 100% de las encuestas tiene estado "Aprobado", la función retorna "Aprobado".
- Si al menos una encuesta tiene estado "Rechazado", retorna "Rechazado".
- Si hay mezcla de aprobados y pendientes, retorna "Pendiente".

---

## Contrato de la función

`calcularEstadoGeneralGrado(encuestas: PazYSalvo[]): string`

- **Recibe:** un arreglo de encuestas `PazYSalvo`, cada una con una propiedad `estado` cuyo valor esperado es "Aprobado", "Pendiente" o "Rechazado".
- **Devuelve:** "Aprobado" si todas las encuestas están aprobadas; "Rechazado" si hay al menos una encuesta rechazada; en los demás casos válidos, "Pendiente".
- **Supuestos:** se reciben encuestas con estados válidos. Si coinciden estados rechazados con otros estados, prevalece "Rechazado".
- **Casos límite:** un arreglo vacío devuelve "Pendiente" porque no acredita que el 100% esté aprobado. Un valor de entrada `null` o `undefined` no es un arreglo válido y debe producir un error.

### Ejemplos

| Entrada (estado) | Salida |
| :--- | :--- |
| `[{ estado: "Aprobado" }, { estado: "Aprobado" }]` | `"Aprobado"` |
| `[{ estado: "Aprobado" }, { estado: "Pendiente" }]` | `"Pendiente"` |
| `[{ estado: "Pendiente" }, { estado: "Rechazado" }]` | `"Rechazado"` |
| `[]` | `"Pendiente"` |

---

## Ejecución de las pruebas

Ejecuta todas las pruebas automatizadas con:

```bash
npm test