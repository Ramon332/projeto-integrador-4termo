import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Contadorcomp } from '../contador/contadorcomp/contadorcomp';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
