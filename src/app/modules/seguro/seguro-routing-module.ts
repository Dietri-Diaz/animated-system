import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutSeguroComponent } from './components/layout-seguro/layout-seguro';
import { ListSeguroComponent } from './components/list-seguro/list-seguro';
import { NewSeguroComponent } from './components/new-seguro/new-seguro';
import { ViewSeguroComponent } from './components/view-seguro/view-seguro';

const routes: Routes = [
  {
    path: '',
    component: LayoutSeguroComponent,
    children: [
      { path: '', component: ListSeguroComponent },
      { path: 'nuevo', component: NewSeguroComponent },
      { path: 'editar/:id', component: NewSeguroComponent },
      { path: 'ver/:id', component: ViewSeguroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguroRoutingModule { }