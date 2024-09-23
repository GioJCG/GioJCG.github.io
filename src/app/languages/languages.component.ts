import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  lenguages : Array<any> = [];
  ngOnInit(): void {
    let lenguage1 = { 
      idioma1: "Ingles",
      idioma2: "Espanol",
      idioma3: "Portugues",
    };
    this.lenguages.push(lenguage1);
    console.log(this.lenguages);
  }
}
