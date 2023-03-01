import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { GlobalSearchModule } from '../global-search/global-search.module';
import { ListContentModule } from '../list-content/list-content.module';



@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    GlobalSearchModule,
    ListContentModule
  ],
  exports: [
    MainContentComponent
  ]
})
export class MainContentModule { }
