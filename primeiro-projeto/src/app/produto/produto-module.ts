import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing-module';
import { ProdutoComponent } from './produto-component/produto-component';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ],
  exports: [ProdutoComponent]
})
export class ProdutoModule { }
