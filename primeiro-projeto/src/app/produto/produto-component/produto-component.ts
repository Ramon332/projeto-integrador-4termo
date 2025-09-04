import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  estoque: number;
}

@Component({
  selector: 'app-produto-component',
  standalone: false,
  templateUrl: './produto-component.html',
  styleUrl: './produto-component.css'
})
export class ProdutoComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Notebook Dell', preco: 2500, estoque: 5 },
    { id: 2, nome: 'Mouse Gamer', preco: 150, estoque: 0 },
    { id: 3, nome: 'Monitor LG', preco: 1200, estoque: 10 },
    { id: 4, nome: 'Teclado Mecânico', preco: 800, estoque: 2 },
  ];
   aumentarPrecos() {
    this.produtos = this.produtos.map(p => ({
      ...p,
      preco: +(p.preco * 1.1).toFixed(2)
    }));
  }

  diminuirPrecos() {
    this.produtos = this.produtos.map(p => ({
      ...p,
      preco: +(p.preco * 0.9).toFixed(2)
    }));
  }
}

