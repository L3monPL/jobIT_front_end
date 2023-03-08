import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreelancerPageComponent } from './freelancer-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FreelancerPageComponent,
  },
];

@NgModule({
  declarations: [
    FreelancerPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    FreelancerPageComponent
  ]
})
export class FreelancerPageModule { }
