import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContentComponent } from './list-content.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    ListContentComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ListContentComponent
  ]
})
export class ListContentModule { }
