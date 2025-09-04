import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // necessário para *ngIf, *ngFor

@Component({
  selector: 'app-diretiva',
  standalone: true,           
  imports: [CommonModule], 
  templateUrl: './diretiva.html',
  styleUrls: ['./diretiva.css']
})
export class Diretiva {
  exibirLista = true;
  tamanhoFonte = 16;

  cursos = [
    { id: 1, nome: 'Angular', ativo: true },
    { id: 2, nome: 'React', ativo: false },
    { id: 3, nome: 'Vue', ativo: true }
  ];

  visualizar() {
    this.exibirLista = !this.exibirLista;
  }

  aumentarFonte() {
    this.tamanhoFonte += 2;
  }

  diminuirFonte() {
    if (this.tamanhoFonte > 8) this.tamanhoFonte -= 2;
  }
}