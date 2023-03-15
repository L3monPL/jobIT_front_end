import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySelectedOfferComponent } from './company-selected-offer.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CompanySelectedOfferComponent
  },
];

@NgModule({
  declarations: [
    CompanySelectedOfferComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CompanySelectedOfferComponent
  ]
})
export class CompanySelectedOfferModule { }
