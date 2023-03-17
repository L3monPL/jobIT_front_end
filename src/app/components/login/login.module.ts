import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
