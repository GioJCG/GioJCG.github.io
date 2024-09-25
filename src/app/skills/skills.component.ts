import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: Array<any> = [];
  ngOnInit(): void {
    let skill1 = {
      habilidad: 'Trabajo en equipo',
      nivel: 7,
    };

    let skill2 = {
      habilidad: 'Comunicacion',
      nivel: 8,
    };

    let skill3 = {
      habilidad: 'Pensamiento critico',
      nivel: 7,
    };

    let skill4 = {
      habilidad: 'Trabajo bajo presion',
      nivel: 10,
    };

    let skill5 = {
      habilidad: 'Adaptabilidad',
      nivel: 9,
    };

    this.skills.push(skill1);
    this.skills.push(skill2);
    this.skills.push(skill3);
    this.skills.push(skill4);
    this.skills.push(skill5);
    console.log(this.skills);
  }
}
