import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content.component';
import { GlobalSearchModule } from '../global-search/global-search.module';
import { ListContentModule } from '../list-content/list-content.module';
import {MatIconModule} from '@angular/material/icon';
import { LoginModule } from '../login/login.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { SearchNavModule } from '../search-nav/search-nav.module';


@NgModule({
  declarations: [
    MainContentComponent
  ],
  imports: [
    CommonModule,
    GlobalSearchModule,
    ListContentModule,
    MatIconModule,
    SearchNavModule,
    RouterModule,
  ],
  exports: [
    MainContentComponent
  ]
})
export class MainContentModule { }
