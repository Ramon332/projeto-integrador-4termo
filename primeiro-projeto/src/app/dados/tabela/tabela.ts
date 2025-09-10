import { Component } from '@angular/core';

export interface PeriodicElement {
  nome: string;
  quantidade: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {nome: 'Ramon', quantidade: 1},
  {nome: 'Marcelo', quantidade: 2},
  {nome: 'Edvan', quantidade: 3},
];

@Component({
  selector: 'app-tabela',
  standalone: false,
  templateUrl: './tabela.html',
  styleUrl: './tabela.css'
})
export class Tabela {
  displayedColumns: string[] = ['nome', 'quantidade', 'botoes'];
  dataSource = ELEMENT_DATA;

}

