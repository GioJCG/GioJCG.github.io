import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];
  ngOnInit(): void{
    let work1 = {
      fecha: "2022-2024",
      ubicacion: "Ixtac Ver.",
      puesto: "Ingeniero de Software",
      logros : [
        { descripcion: "Creacion de una api de gato"},
        { descripcion: "Creacion de un gestor de tiendas"}
      ]
    };
    
    let work2 = {
      fecha: "2022-2024",
      ubicaion: "Orizaba, Ver",
      puesto: "Ingeniero de software",
      logros : [
        {descripcion: "Creacion de una api de videojuegos"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience);
  }
}
