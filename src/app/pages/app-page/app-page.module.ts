import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppPageComponent } from './app-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

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
  ],
  exports: [
    AppPageComponent
  ]
})
export class AppPageModule { }
