import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements : Array<any> = [];
  ngOnInit(): void {
    let achievement1 = { 
      logro1: "Curso Entrepreneurship del Cisco Networking Academy",
      logro2: "Platino de Elden Ring",
      logro3: "Platino de Bloodborne",
      logro4: "Platino de Sekiro: Shadows Die Twice",
    };
    this.achievements.push(achievement1);
    console.log(this.achievements);
  }
}
