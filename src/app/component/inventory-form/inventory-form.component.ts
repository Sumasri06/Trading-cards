import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from "../../actions/player.actions";
import * as fromPlayer from "../../reducer/player.reducer";
@Component({
  selector: 'inventory-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss']
})
export class InventoryFormComponent implements OnInit {

  inventoryForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    playerNumber: new FormControl('', Validators.required),
    teamName: new FormControl('', Validators.required),
    expectedValue: new FormControl(''),
  })
  constructor(private store: Store<fromPlayer.State>) { }

  
  ngOnInit(): void {
  }
  get firstName():FormControl { return this.inventoryForm.get('firstName') as FormControl; }
  get lastName() { return this.inventoryForm.get('lastName') as FormControl; }
  get playerNumber() { return this.inventoryForm.get('playerNumber') as FormControl; }
  get teamName() { return this.inventoryForm.get('teamName') as FormControl; }
  get expectedValue() { return this.inventoryForm.get('expectedValue') as FormControl; }

  onInventoryFormSubmit() {
    this.inventoryForm.markAllAsTouched();
    if (this.inventoryForm.invalid) {
      return;
    }
    const player = {id: new Date().getUTCMilliseconds().toString(), ...this.inventoryForm.value};
    this.store.dispatch(new actions.Create(player));
    this.inventoryForm.reset();
  }

}
