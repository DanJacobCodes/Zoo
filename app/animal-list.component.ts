import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component ({
  selector: 'animal-list',
  template: `
  <h3>Filter By:</h3>
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Kegs</option>
    <option value="young">Empty Kegs</option>
    <option value="mature"> Not Empty Kegs</option>
  </select>
  <hr>


  `
})


export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output()  = new EventEmitter();

  editAnimalButton(animalToEdit: Animal)





}
