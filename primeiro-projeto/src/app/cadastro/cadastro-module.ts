import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroRoutingModule } from './cadastro-routing-module';
import { Cadastro } from './cadastro/cadastro';


@NgModule({
  declarations: [
    Cadastro
  ],
  imports: [
    CommonModule,
    CadastroRoutingModule
  ]
})
export class CadastroModule { }
