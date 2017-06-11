import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class ="container">
    <h1>{{zoo}}</h1>
    <ul>
      <li *ngFor="let currentAnimal of animals">{{currentAnimal.name}}<button (click)="editAnimal()">Edit</button></li>
      <animal-list [childAnimalList]="animalList" (clickSender)="editAnimal($event)"></animal-list>
      <edit-animal [selectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </ul>
  </div>
  `
})



export class AppComponent {
  zoo: string = "Epicodus Zoo";
  selectedAnimal = null;
  animalList: Animal[] = [
    new Animal('Gorilla', 'Harambe', 2, 'Carnivore', 'Gorilla enclosure', 3, 'Male', 'Relaxing not harming anyone', 'Overreacting'),
    new Animal('Lion', 'Simba', 2, 'Carnivore', 'Pride Rock', 2, 'Male', 'Gazelle', 'Hyenas'),
    new Animal('Sloth', 'Sid', 2, 'Herbivore', 'Sloth Swings', 3, 'Femmle', 'Sleeping', 'Moving')
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
