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

  let todasAprobadas = true;

  for (let i = 0; i < encuestas.length; i += 1) {
    if (encuestas[i].estado === "Rechazado") {
      return "Rechazado";
    }

    if (encuestas[i].estado !== "Aprobado") {
      todasAprobadas = false;
    }
  }

  return todasAprobadas ? "Aprobado" : "Pendiente";
}
