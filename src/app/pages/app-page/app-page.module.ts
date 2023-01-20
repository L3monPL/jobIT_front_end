import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPageComponent } from './app-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { SearchNavModule } from 'src/app/components/search-nav/search-nav.module';
import { MainContentModule } from 'src/app/components/main-content/main-content.module';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  }
]

@NgModule({
  declarations: [
    AppPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SearchNavModule,
    MainContentModule
  ],
  exports: [
    AppPageComponent
  ]
})
export class AppPageModule { }
