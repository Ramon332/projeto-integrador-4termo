import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  standalone: false,
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css'
})

export class Diretiva {
  exibirLista: boolean = true;
  ocultarLista: boolean = false;

  visualizar() {
    this.exibirLista = !this.exibirLista;
  }
  cursos = [
    { id: 1, nome: 'Angular', ativo: true },
    { id: 2, nome: 'React', ativo: false },
    { id: 3, nome: 'Vue', ativo: true }
  ];
}
