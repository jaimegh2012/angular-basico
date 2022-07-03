import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroeComponent{
    nombre: string = "Spiderman";
    edad: number = 35;

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    cambiarNombre(): void{
        this.nombre = "Hulk";
    }

    cambiarEdad(): void{
        this.edad = 45;
    }
}