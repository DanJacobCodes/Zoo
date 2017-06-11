import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
  <div class = "container">
  <div *ngIf="selectedAnimal">
  <h4>{{selectedAnimal.name}}</h4>
  <hr>
  <h4>Edit Animal</h4>
  <label>Edit Animal Name:</label>
    <input [(ngModel)]="selectedAnimal.name" class="form-control">
    <br>
    <label>Edit Animal Species:</label>
    <input [(ngModel)]="selectedAnimal.species" class="form-control">
    <br>
    <label>Edit Animal Age:</label>
    <input [(ngModel)]="selectedAnimal.age" class="form-control">
    <br>
    <label>Edit Animal Diet:</label>
    <input [(ngModel)]="selectedAnimal.diet" class="form-control">
    <br>
    <label>Edit Animal Location:</label>
    <input [(ngModel)]="selectedAnimal.location" class="form-control">
    <br>
    <label>Edit Animal Caretakers:</label>
    <input [(ngModel)]="selectedAnimal.caretakers" class="form-control">
    <br>
    <label>Edit Animal Sex:</label>
    <input [(ngModel)]="selectedAnimal.sex" class="form-control">
    <br>
    <label>Edit Animal Likes:</label>
    <input [(ngModel)]="selectedAnimal.likes" class="form-control">
    <br>
    <label>Edit Animal Dislikes:</label>
    <input [(ngModel)]="selectedAnimal.dislikes" class="form-control">
    <br>
    <button (click)="doneButtonClickedSender()" class="btn btn-success">Done</button>
  </div>
</div>
  `
})


export class EditAnimalComponent{
  @Input() selectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked(){
    this.doneButtonClickedSender.emit()
  }
}
