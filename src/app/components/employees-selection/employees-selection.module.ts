import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesSelectionComponent } from './employees-selection.component';



@NgModule({
  declarations: [
    EmployeesSelectionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EmployeesSelectionComponent
  ]
})
export class EmployeesSelectionModule { }
