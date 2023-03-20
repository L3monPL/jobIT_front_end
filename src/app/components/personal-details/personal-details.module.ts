import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetailsComponent } from './personal-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';

const routes: Routes = [
  {
    path: '',
    component: PersonalDetailsComponent
  },
];

@NgModule({
  declarations: [
    PersonalDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    TextFieldModule
  ],
  exports: [
    PersonalDetailsComponent
  ]
})
export class PersonalDetailsModule { }
