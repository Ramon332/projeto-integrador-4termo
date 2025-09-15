import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  standalone: false,
  templateUrl: './dados.html',
  styleUrl: './dados.css'
})
export class Dados {
  nome: String = 'Ramon';
  salario: number = 1000;

  exibirSalario() {
    this.salario = 1000;
  }

  ocultarSalario() {
    this.salario = 0;
  }
}
