import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'xd',
//     component: LoginComponent
//   },
  
//   // { path: '**',   redirectTo: '', pathMatch: 'full' },
// ];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    // RouterModule.forChild(routes),
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
