import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosRoutingModule } from './dados-routing-module';
import { Tabela } from './tabela/tabela';
import {MatTableModule} from '@angular/material/table';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [
    Tabela
  ],
  imports: [
    CommonModule,
    DadosRoutingModule,
    MatTableModule,
    MatButtonToggleModule
  ]
})
export class DadosModule { }
