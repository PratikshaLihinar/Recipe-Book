// import {
//   Component,
//   OnInit,
//   ElementRef,
//   ViewChild
// } from '@angular/core';

// import { Ingredient } from '../../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list.service';

// @Component({
//   selector: 'app-shopping-edit',
//   templateUrl: './shopping-edit.component.html',
//   styleUrls: ['./shopping-edit.component.css']
// })
// export class ShoppingEditComponent implements OnInit {
//   @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
//   @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

//   constructor(private slService: ShoppingListService) { }

//   ngOnInit() {
//   }

//   onAddItem() {
//     const ingName = this.nameInputRef.nativeElement.value;
//     const ingAmount = this.amountInputRef.nativeElement.value;
//     const newIngredient = new Ingredient(ingName, ingAmount);
//     this.slService.addIngredient(newIngredient);
//   }

// }

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';


import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slform: NgForm;
 
  subcription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subcription =this.slService.startedEditing
    .subscribe(
      (index: number)=>{
        this.editedItemIndex = index;
        this.editMode = true;
       
        this.editedItem = this.slService.getIngredient(index);
        this.slform.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.slService.updateIngredient(this.editedItemIndex,newIngredient);//update the ingredient
    }else{
      this.slService.addIngredient(newIngredient);//add new ingredient
    }
    this.editMode=false;//reset the mode
    this.slform.reset();// clear the input or reset it
   
  }
  onClear(){
    this.slform.reset();
    this.editMode=false;
  }
  onDelete(){
    this.slService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
  ngOnDestroy(){
    this.subcription.unsubscribe();
  }

}