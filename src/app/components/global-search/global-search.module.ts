import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSearchComponent } from './global-search.component';



@NgModule({
  declarations: [
    GlobalSearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GlobalSearchComponent
  ]
})
export class GlobalSearchModule { }
