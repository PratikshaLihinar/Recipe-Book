import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner/loading-spinner.component';
import { PlacholderDirective } from './placeholder/placeholder.directive';
import { DropdownDirective } from './dropdown.directive';



@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlacholderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    AlertComponent,
    LoadingSpinnerComponent,
    PlacholderDirective,
    DropdownDirective,
    CommonModule
  ]
})
export class SharedModule { }
