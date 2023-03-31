import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCreateOfferPageComponent } from './company-create-offer-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CompanyCreateOfferFormModule } from 'src/app/components/company-create-offer-form/company-create-offer-form.module';

const routes: Routes = [
  {
    path: '',
    component: CompanyCreateOfferPageComponent,
  },
];

@NgModule({
  declarations: [
    CompanyCreateOfferPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    CompanyCreateOfferFormModule
  ],
  exports: [
    CompanyCreateOfferPageComponent
  ]
})
export class CompanyCreateOfferPageModule { }
