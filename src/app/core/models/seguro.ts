export interface Seguro {
  id?: number;
  nroCita: number;
  nombrePaciente: string;
  tipoSeguro: string; // "1", "2", "3", "4"
  sexo: string; // "1" = Masculino, "0" = Femenino
  especialidad: string;
}