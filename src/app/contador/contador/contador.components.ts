import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h2>{{title}}</h2>
        <h2>La base es: <strong>{{base}}</strong></h2>

        <button (click)="acumular(base)">{{'+' + base}}</button>
        <p>{{numero}}</p>
        <button (click)="acumular(base * -1)">{{'-'+base}}</button>
    `
})
export class ContadorComponet {
    title = 'contador app';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number){
    console.log(valor);
    this.numero += valor;
  }
}