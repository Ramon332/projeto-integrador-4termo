import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dados } from './dados/dados';

const routes: Routes = [
  {
    path: 'dadosfunc', component: Dados
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
