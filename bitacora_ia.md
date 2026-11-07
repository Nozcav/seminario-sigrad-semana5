# Bitácora de uso de IA

Proyecto: SIGRAD
Estudiante: Daniel Felipe Arias Bravo
Funcionalidad: HU-02 Cálculo del estado general de grado
Asistente usado: GitHub Copilot / Qwen (vía IDE)

## Entradas

### Entrada 1
- **Fecha:** 2026-11-07
- **Prompt o sugerencia:** "Escribe un archivo de pruebas en Jest con 5 pruebas automatizadas (normales, límite y error) para la función `calcularEstadoGeneralGrado`."
- **Decisión:** Aceptada con cambios
- **Por qué:** El asistente generó una estructura limpia con `describe` e `it`, pero en el caso límite de arreglo vacío propuso retornar `'Pendiente'` en lugar de exigir un comportamiento acorde a las guardas estrictas.
- **Verificación:** Ajusté el tipo de datos con la interfaz `PazYSalvo` y ejecuté `npm test` confirmando que las pruebas fallaban inicialmente (fase roja).
- **Commit relacionado:** Pruebas de calcularEstadoGeneralGrado (en rojo)

### Entrada 2
- **Fecha:** 2026-11-07
- **Prompt o sugerencia:** "Escribe la implementación en TypeScript usando un bucle tradicional para que pasen las pruebas en verde."
- **Decisión:** Aceptada
- **Por qué:** Permitió resolver la lógica base rápidamente estructurando las validaciones de entrada y los condicionales necesarios para satisfacer todas las pruebas.
- **Verificación:** Ejecuté `npm test` y las 5 pruebas pasaron exitosamente en verde.
- **Commit relacionado:** Implementación de cálculo de grado (pruebas en verde)

### Entrada 3
- **Fecha:** 2026-11-07
- **Prompt o sugerencia:** El IDE sugirió autocompletar una validación redundante para verificar si el arreglo era nulo usando un bloque `if` separado de la verificación del tipo.
- **Decisión:** Rechazada
- **Por qué:** Añadía líneas de código innecesarias y duplicaba la guarda de tipos que TypeScript ya controla en tiempo de compilación.
- **Verificación:** Descarté la sugerencia y mantuve la validación concisa.
- **Commit relacionado:** Implementación de cálculo de grado (pruebas en verde)

### Entrada 4
- **Fecha:** 2026-11-07
- **Prompt o sugerencia:** "Refactoriza el código de `grado.ts` reemplazando el bucle tradicional por métodos declarativos como `.some()` para mejorar la mantenibilidad."
- **Decisión:** Aceptada
- **Por qué:** Mejora la legibilidad del código y reduce la complejidad ciclomática, alineándose con el atributo de calidad de mantenibilidad del proyecto SIGRAD.
- **Verificación:** Ejecuté `npm test` y el 100% de las pruebas pasaron satisfactoriamente sin modificar los tests.
- **Commit relacionado:** Refactor: Uso de métodos de array .some() para mantenibilidad

### Entrada 5
- **Fecha:** 2026-11-07
- **Prompt o sugerencia:** La IA sugirió extraer la lógica de evaluación de estados en una clase auxiliar orientada a objetos externa.
- **Decisión:** Rechazada
- **Por qué:** Representa una clara sobreingeniería para una función pura y pequeña, violando el principio de simplicidad del proyecto.
- **Verificación:** Se mantuvo la función pura modular tal como dictaba el contrato inicial.
- **Commit relacionado:** Refactor: Uso de métodos de array .some() para mantenibilidad

## Resumen

| Decisión | Cantidad |
|---|---|
| Aceptadas | 2 |
| Aceptadas con cambios | 1 |
| Rechazadas | 2 |

## Errores que atraparon las pruebas

La prueba correspondiente al caso límite de la lista vacía ayudó a validar que el sistema respondiera correctamente bajo condiciones de entrada extremas. Al correr Jest, el comportamiento inicial obligó a afinar las guardas de seguridad para que la función evaluara de manera limpia los arreglos sin romper la ejecución.

## Reflexión final

El asistente de código aceleró significativamente la generación de la estructura inicial de las pruebas y la sintaxis de los métodos declarativos. Sin embargo, el ciclo TDD demostró ser indispensable para mantener el control estricto sobre la lógica de negocio y evitar sugerencias de sobreingeniería. Aprendí que la IA es un excelente acelerador de sintaxis, pero la validación mediante pruebas automatizadas locales es la única garantía de calidad y robustez del software.