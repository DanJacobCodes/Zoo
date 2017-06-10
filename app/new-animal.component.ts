import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h3>Add an animal</h3>
  <form>
    <div>
      <label>Enter Species:</label>
      <input #newName style="font-size:25px" type="text" class="form-control"/>
    </div>
    <div>
      <label>Enter Name:</label>
      <input #newAnimal style="font-size:25px" type="text" class="form-control"/>
    </div>
    <div>
      <label>Enter Age:</label>
      <input #newAge style="font-size:25px" type="text" class="form-control"/>
    </div>
    <div>
      <label>Enter Diet Type:</label>
      <input #newDiet style="font-size:25px" type="number" class="form-control"/>
    </div>
    <div>
      <label>Enter Zoo Location:</label>
      <input #newLocation style="font-size:25px" type="number" class="form-control"/>
    </div>
    <div>
      <label>How many caretakers will this animal need?:</label>
      <input #newCareTakers style="font-size:25px" type="number" class="form-control"/>
    </div>
    <div>
      <label>Enter Sex:</label>
      <input #newSex style="font-size:25px" type="number" class="form-control"/>
    </div>
    <div>
      <label>Likes:</label>
      <input #newLikes style="font-size:25px" type="number" class="form-control"/>
    </div>
    <div>
      <label>Dislikes:</label>
      <input #newDislikes style="font-size:25px" type="number" class="form-control"/>
    </div>
  </form>
  `
})
