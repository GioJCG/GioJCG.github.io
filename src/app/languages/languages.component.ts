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
  lenguages: Array<any> = [];

  ngOnInit(): void {
    this.lenguages = [ 
      { idioma: "Inglés", nivel: "Medio" },
      { idioma: "Español", nivel: "Avanzado" },
      { idioma: "Portugués", nivel: "Básico" },
    ];
    console.log(this.lenguages);
  }
}
