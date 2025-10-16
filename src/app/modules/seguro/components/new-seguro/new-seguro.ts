import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Seguro } from '../../../../core/models/seguro';
import { TIPOS_SEGURO } from '../../../../core/models/tipo-seguro';
import { SeguroService } from '../../../../core/services/seguro.service';

@Component({
  selector: 'app-new-seguro',
  templateUrl: './new-seguro.html',
  styleUrls: ['./new-seguro.css']
})
export class NewSeguroComponent implements OnInit {
  seguroForm: FormGroup;
  esEdicion = false;
  idSeguro?: number;
  tiposSeguros = TIPOS_SEGURO;

  constructor(
    private fb: FormBuilder,
    private seguroService: SeguroService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.seguroForm = this.fb.group({
      nroCita: ['', [Validators.required, Validators.min(1)]],
      nombrePaciente: ['', [Validators.required, Validators.minLength(3)]],
      tipoSeguro: ['', Validators.required],
      sexo: ['', Validators.required],
      especialidad: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.esEdicion = true;
        this.idSeguro = +params['id'];
        this.cargarSeguro();
      }
    });
  }

  cargarSeguro(): void {
    if (this.idSeguro) {
      this.seguroService.obtenerSeguroPorId(this.idSeguro).subscribe({
        next: (seguro) => {
          this.seguroForm.patchValue(seguro);
        },
        error: (error) => {
          console.error('Error al cargar seguro:', error);
          alert('Error al cargar el seguro');
          this.router.navigate(['/seguro']);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.seguroForm.valid) {
      const seguro: Seguro = this.seguroForm.value;

      if (this.esEdicion && this.idSeguro) {
        this.seguroService.actualizarSeguro(this.idSeguro, seguro).subscribe({
          next: () => {
            alert('Seguro actualizado exitosamente');
            this.router.navigate(['/seguro']);
          },
          error: (error) => {
            console.error('Error al actualizar seguro:', error);
            alert('Error al actualizar el seguro');
          }
        });
      } else {
        this.seguroService.registrarSeguro(seguro).subscribe({
          next: () => {
            alert('Seguro registrado exitosamente');
            this.router.navigate(['/seguro']);
          },
          error: (error) => {
            console.error('Error al registrar seguro:', error);
            alert('Error al registrar el seguro');
          }
        });
      }
    } else {
      Object.keys(this.seguroForm.controls).forEach(key => {
        this.seguroForm.get(key)?.markAsTouched();
      });
    }
  }
}