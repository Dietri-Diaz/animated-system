import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SeguroRoutingModule } from './seguro-routing-module';
import { LayoutSeguroComponent } from './components/layout-seguro/layout-seguro';
import { ListSeguroComponent } from './components/list-seguro/list-seguro';
import { NewSeguroComponent } from './components/new-seguro/new-seguro';
import { ViewSeguroComponent } from './components/view-seguro/view-seguro';

@NgModule({
  declarations: [
    LayoutSeguroComponent,
    ListSeguroComponent,
    NewSeguroComponent,
    ViewSeguroComponent
  ],
  imports: [
    CommonModule,
    SeguroRoutingModule,
    ReactiveFormsModule
  ]
})
export class SeguroModule { }