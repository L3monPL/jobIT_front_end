import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
