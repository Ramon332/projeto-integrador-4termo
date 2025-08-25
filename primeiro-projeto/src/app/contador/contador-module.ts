import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContadorRoutingModule } from './contador-routing-module';
import { Contadorcomp } from './contadorcomp/contadorcomp';


@NgModule({
  declarations: [
    Contadorcomp
  ],
  imports: [
    CommonModule,
    ContadorRoutingModule
  ]
})
export class ContadorModule { }
