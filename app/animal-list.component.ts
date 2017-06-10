import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component ({
  selector: 'animal-list',
  template: `
  <!-- Select Option Menu (Filtering by Age) -->
  <h3>Filter By:</h3>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Kegs</option>
    <option value="young">Empty Kegs</option>
    <option value="mature"> Not Empty Kegs</option>
  </select>
  <hr>

  <!-- Animal List -->
<div *ngFor="let currentAnimal of zooAnimalList | age:filterByAge">
<ul>
 <li>Species:  {{currentAnimal.species}}</li>
 <li>Age:  {{currentAnimal.age}}</li>
 <li>Sex:  {{currentAnimal.sex}}</li>
 <li>Likes:  {{currentAnimal.likes}}</li>
 <li>Dislikes:  {{currentAnimal.dislikes}}</li>
 <li>Care Takers {{currentAnimal.caretakers}}</li>
 <button class="btn btn-warning" (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
</ul>
</div>
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
