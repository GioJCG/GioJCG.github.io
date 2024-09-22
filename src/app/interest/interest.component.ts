import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.css'
})
export class InterestComponent {
  interest : Array<any> = [];
  ngOnInit(): void {  
    let interest1 = { 
      interes1: "Videojuegos",
      interes2: "Musica",
      interes3: "Cocina",
      interes4: "Dibujo",
      interst5: "Programacion"
    };
    this.interest.push(interest1);
    console.log(this.interest);
  }
}
