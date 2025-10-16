import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Seguro } from '../models/seguro';

@Injectable({
  providedIn: 'root'
})
export class SeguroService {
  private apiUrl = 'http://localhost:3000/seguros';

  constructor(private http: HttpClient) { }

  // RF01: Registrar seguros
  registrarSeguro(seguro: Seguro): Observable<Seguro> {
    return this.http.post<Seguro>(this.apiUrl, seguro);
  }

  // RF02: Actualizar información de seguros
  actualizarSeguro(id: number, seguro: Seguro): Observable<Seguro> {
    return this.http.put<Seguro>(`${this.apiUrl}/${id}`, seguro);
  }

  // RF03: Listar información de seguros
  listarSeguros(): Observable<Seguro[]> {
    return this.http.get<Seguro[]>(this.apiUrl);
  }

  // RF04: Mostrar información detallada del seguro
  obtenerSeguroPorId(id: number): Observable<Seguro> {
    return this.http.get<Seguro>(`${this.apiUrl}/${id}`);
  }

  // RF05: Eliminar seguro
  eliminarSeguro(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}