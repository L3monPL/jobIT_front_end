import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNavComponent } from './search-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    SearchNavComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports: [
    SearchNavComponent
  ]
})
export class SearchNavModule { }
