<<<<<<< HEAD
# Funcionalidad de la semana 5

## Historia de usuario (HU-02)

Como coordinador, quiero que el sistema calcule el estado general de grado basándose en las encuestas de Paz y Salvo, para determinar si un estudiante puede graduarse.

**Criterio de aceptación:** La función recibe un arreglo de objetos `PazYSalvo`. Si el 100% tiene estado `"Aprobado"`, retorna `"Aprobado"`. Si al menos uno tiene estado `"Rechazado"`, retorna `"Rechazado"`. Si hay mezcla de aprobados y pendientes, retorna `"Pendiente"`.

## Contrato de la función

```ts
calcularEstadoGeneralGrado(encuestas: PazYSalvo[]): string
```

- **Recibe:** un arreglo de encuestas `PazYSalvo`, cada una con una propiedad `estado` cuyo valor esperado es `"Aprobado"`, `"Pendiente"` o `"Rechazado"`.
- **Devuelve:** `"Aprobado"` si todas las encuestas están aprobadas; `"Rechazado"` si hay al menos una encuesta rechazada; en los demás casos válidos, `"Pendiente"`.
- **Supuestos:** se reciben encuestas con estados válidos. Si coinciden estados rechazados con otros estados, prevalece `"Rechazado"`.
- **Casos límite:** un arreglo vacío devuelve `"Pendiente"` porque no acredita que el 100% esté aprobado. Un valor de entrada `null` o `undefined` no es un arreglo válido y debe producir un error.

### Ejemplos

| Entrada (`estado`) | Salida |
|---|---|
| `[{ estado: "Aprobado" }, { estado: "Aprobado" }]` | `"Aprobado"` |
| `[{ estado: "Aprobado" }, { estado: "Pendiente" }]` | `"Pendiente"` |
| `[{ estado: "Pendiente" }, { estado: "Rechazado" }]` | `"Rechazado"` |
| `[]` | `"Pendiente"` |

## Ejecución de las pruebas

Ejecuta todas las pruebas automatizadas con:

```bash
npm test
```
=======
# seminario-sigrad-semana5
>>>>>>> 672cdaa975da8b2e53a5cb6413378a3c1b4b7774
