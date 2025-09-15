import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'livros',
    loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule),
  },
  {
    path: 'contador',
    loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule),
  },
  {
    path: 'estrutura',
    loadChildren: () => import('./estrutura/estrutura-module').then(m => m.EstruturaModule),
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro-module').then(m => m.CadastroModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto-module').then(m => m.ProdutoModule)
  },
  {
    path: 'dados',
    loadChildren: () => import('./dados/dados-module').then(m => m.DadosModule)
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./funcionarios/funcionarios-module').then(m => m.FuncionariosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
