export interface TipoSeguro {
  id: string;
  nombre: string;
}

export const TIPOS_SEGURO: TipoSeguro[] = [
  { id: '1', nombre: 'SCTR' },
  { id: '2', nombre: 'EPS' },
  { id: '3', nombre: 'Seguro Privado' },
  { id: '4', nombre: 'Sin Seguro' }
];