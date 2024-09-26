import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education : Array<any> = [];
  ngOnInit(): void {
    let education1 = {
      Universidad: "Universidad Veracruzana",
      fecha: "2022 - 2024",
      carrera: "Ingenieria de Software",
      Semestre: "Quinto Semestre",
    };
    this.education.push(education1);
    console.log(this.education);
  }
}
