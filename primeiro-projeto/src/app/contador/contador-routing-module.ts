import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contadorcomp } from './contadorcomp/contadorcomp';

const routes: Routes = [
  {
    path: '', component: Contadorcomp // rota vazia → será usada quando acessar /contador
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContadorRoutingModule { }
