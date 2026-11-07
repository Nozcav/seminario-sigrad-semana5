import { calcularEstadoGeneralGrado } from "./grado";
import type { PazYSalvo } from "./grado";

const encuesta = (estado: string): PazYSalvo => ({ estado });

describe("calcularEstadoGeneralGrado", () => {
  it("retorna Aprobado cuando todas las encuestas están aprobadas", () => {
    expect(
      calcularEstadoGeneralGrado([encuesta("Aprobado"), encuesta("Aprobado")]),
    ).toBe("Aprobado");
  });

  it("retorna Pendiente cuando hay mezcla de aprobados y pendientes", () => {
    expect(
      calcularEstadoGeneralGrado([encuesta("Aprobado"), encuesta("Pendiente")]),
    ).toBe("Pendiente");
  });

  it("retorna Pendiente cuando el arreglo está vacío", () => {
    expect(calcularEstadoGeneralGrado([])).toBe("Pendiente");
  });

  it("prioriza Rechazado cuando hay al menos una encuesta rechazada", () => {
    expect(
      calcularEstadoGeneralGrado([
        encuesta("Aprobado"),
        encuesta("Pendiente"),
        encuesta("Rechazado"),
      ]),
    ).toBe("Rechazado");
  });

  it("lanza TypeError cuando recibe null en lugar de un arreglo", () => {
    expect(() =>
      calcularEstadoGeneralGrado(null as unknown as PazYSalvo[]),
    ).toThrow(TypeError);
  });
});
