import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component ({
  selector: 'animal-list',
  template: `
  <!-- Select Option Menu (Filtering by Age) -->
  <h3>Filter By:</h3>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="young">Young Animals</option>
    <option value="mature">Mature Animals</option>
  </select>
  <hr>

  <!-- Animal List -->
  <ul>
    <li class="card-panel"
      *ngFor="let currentAnimal of childAnimalList| age:filterbyAge"><h4>{{currentAnimal.name}}</h4><button class="btn edit" (click)="editButtonHasBeenClicked(currentAnimal)">Edit</button>Species: {{currentAnimal.species}} / Age: {{currentAnimal.age}} / Diet: {{currentAnimal.diet}} / Location: {{currentAnimal.location}} / Caretakers: {{currentAnimal.caretakers}} / Sex: {{currentAnimal.sex}} / Likes: {{currentAnimal.likes}} / Dislikes: {{currentAnimal.dislikes}}
    </li>
  </ul>
  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender  = new EventEmitter();
  filterbyAge: string = "allAnimals";

  editAnimalButton(animalToEdit: Animal){
    this.clickSender.emit(animalToEdit)
  }

  onChange(option){
    this.filterbyAge = option;
  }

}
