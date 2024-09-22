import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills : Array<any> = [];
  ngOnInit(): void {
    let skill1 = {
      habilidad1: "Trabajo en equipo",
      habilidad2: "Comunicacion",
      habilidad3: "Pensamiento critico",
      habilidad4: "Trabajo bajo presion",
      habilidad5: "Adaptabilidad",
    };
    this.skills.push(skill1);
    console.log(this.skills);
  }
}
