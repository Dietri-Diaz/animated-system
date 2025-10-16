import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Seguro } from '../../../../core/models/seguro';
import { TIPOS_SEGURO } from '../../../../core/models/tipo-seguro';
import { SeguroService } from '../../../../core/services/seguro.service';

@Component({
  selector: 'app-list-seguro',
  templateUrl: './list-seguro.html',
  styleUrls: ['./list-seguro.css']
})
export class ListSeguroComponent implements OnInit {
  seguros: Seguro[] = [];
  loading = false;

  constructor(
    private seguroService: SeguroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cargarSeguros();
  }

  cargarSeguros(): void {
    this.loading = true;
    this.seguroService.listarSeguros().subscribe({
      next: (data) => {
        this.seguros = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar seguros:', error);
        alert('Error al cargar los seguros');
        this.loading = false;
      }
    });
  }

  eliminarSeguro(id: number): void {
    if (confirm('¿Está seguro de eliminar este seguro?')) {
      this.seguroService.eliminarSeguro(id).subscribe({
        next: () => {
          alert('Seguro eliminado exitosamente');
          this.cargarSeguros();
        },
        error: (error) => {
          console.error('Error al eliminar seguro:', error);
          alert('Error al eliminar el seguro');
        }
      });
    }
  }

  obtenerNombreTipoSeguro(id: string): string {
    const tipo = TIPOS_SEGURO.find(t => t.id === id);
    return tipo ? tipo.nombre : 'Desconocido';
  }
}