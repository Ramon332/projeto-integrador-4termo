import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
  
})
export class App {
  protected readonly title = signal('primeiro-projeto');

  nome: String = 'Ramon';
  imagemUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';
  mensagem = "";

  dizerOi() {
    this.mensagem = "Estou aprendendo angular"
  }
}
