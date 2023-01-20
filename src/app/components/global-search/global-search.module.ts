import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalSearchComponent } from './global-search.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    GlobalSearchComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    GlobalSearchComponent
  ]
})
export class GlobalSearchModule { }
