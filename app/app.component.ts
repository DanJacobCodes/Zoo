import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class ="container">
    <h1>{{zoo}}</h1>
    <ul>
      <li *ngFor="let currentAnimal of animals">{{currentAnimal.name}}<button (click)="editAnimal()">Edit</button></li>
    </ul>
  </div>
  `
})



export class AppComponent {
  zoo: string = "Epicodus Zoo";
  selectedAnimal = null;
  animalList: Animal[] = [
    new Animal('Gorilla', 'Harambe', 2, 'Carnivore', 'Gorilla enclosure', 3, 'Male', 'Relaxing not harming anyone', 'Overreacting')
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing(){
    this.selectedAnimal = null;
  }

  addAnimal(newAnimal: Animal){
    this.animalList.push(newAnimal);
  }
}
