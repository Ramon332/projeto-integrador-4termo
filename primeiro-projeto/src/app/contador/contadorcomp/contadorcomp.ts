import { Component } from '@angular/core';

@Component({
  selector: 'app-contadorcomp',
  standalone: false,
  templateUrl: './contadorcomp.html',
  styleUrl: './contadorcomp.css'
})
export class Contadorcomp {
  valor: number = 0;

  incrementar () {
    this.valor++;
  }
}

