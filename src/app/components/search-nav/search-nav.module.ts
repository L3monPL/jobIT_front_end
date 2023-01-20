import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNavComponent } from './search-nav.component';



@NgModule({
  declarations: [
    SearchNavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchNavComponent
  ]
})
export class SearchNavModule { }
