import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produtos-component',
  standalone: false,
  templateUrl: './lista-produtos-component.html',
  styleUrl: './lista-produtos-component.css'
})
export class ListaProdutosComponent {
    listaProdutos = [
    { id: 1, nome: 'Produto A'},
    { id: 2, nome: 'Produto B'},
    { id: 3, nome: 'Produto C'}
  ]
}
