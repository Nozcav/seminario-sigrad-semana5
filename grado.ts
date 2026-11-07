export interface PazYSalvo {
  estado: string;
}

export function calcularEstadoGeneralGrado(
  encuestas: PazYSalvo[],
): string {
  if (!Array.isArray(encuestas)) {
    throw new TypeError("encuestas debe ser un arreglo");
  }

  if (encuestas.length === 0) {
    return "Pendiente";
  }

  if (encuestas.some((encuesta) => encuesta.estado === "Rechazado")) {
    return "Rechazado";
  }

  if (encuestas.some((encuesta) => encuesta.estado !== "Aprobado")) {
    return "Pendiente";
  }

  return "Aprobado";
}
