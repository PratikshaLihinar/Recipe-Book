import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ 
    ShoppingListComponent,
    ShoppingEditComponent,],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {path: 'shopping-list',component: ShoppingListComponent},
    ]),
    SharedModule
  ]
})
export class ShoppingListModule { }
