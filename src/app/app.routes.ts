import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/seguro',
    pathMatch: 'full'
  },
  {
    path: 'seguro',
    loadChildren: () => import('./modules/seguro/seguro-module').then(m => m.SeguroModule)
  },
  {
    path: '**',
    redirectTo: '/seguro'
  }
];