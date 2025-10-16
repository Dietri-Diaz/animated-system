import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Seguro } from '../../../../core/models/seguro';
import { TIPOS_SEGURO } from '../../../../core/models/tipo-seguro';
import { SeguroService } from '../../../../core/services/seguro.service';

@Component({
  selector: 'app-view-seguro',
  templateUrl: './view-seguro.html',
  styleUrls: ['./view-seguro.css']
})
export class ViewSeguroComponent implements OnInit {
  seguro?: Seguro;
  loading = false;

  constructor(
    private seguroService: SeguroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.cargarSeguro(id);
      }
    });
  }

  cargarSeguro(id: number): void {
    this.loading = true;
    this.seguroService.obtenerSeguroPorId(id).subscribe({
      next: (data) => {
        this.seguro = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar seguro:', error);
        alert('Error al cargar el seguro');
        this.loading = false;
        this.router.navigate(['/seguro']);
      }
    });
  }

  obtenerNombreTipoSeguro(id: string): string {
    const tipo = TIPOS_SEGURO.find(t => t.id === id);
    return tipo ? tipo.nombre : 'Desconocido';
  }
}