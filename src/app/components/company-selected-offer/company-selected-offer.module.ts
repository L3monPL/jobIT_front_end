import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanySelectedOfferComponent } from './company-selected-offer.component';
import { RouterModule, Routes } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { InfoAboutCompanyPanelInOfferModule } from '../info-about-company-panel-in-offer/info-about-company-panel-in-offer.module';
import { ListOfCompanyOffertsPanelInOfferModule } from '../list-of-company-offerts-panel-in-offer/list-of-company-offerts-panel-in-offer.module';

const routes: Routes = [
  {
    path: '',
    component: CompanySelectedOfferComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: () => import('../../components/personal-details/personal-details.module').then(m => m.PersonalDetailsModule)
    //   },
    //   {
    //     path: 'login',
    //     loadChildren: () => import('../../components/login/login.module').then(m => m.LoginModule)
    //   },
    //   {
    //     path: 'register',
    //     loadChildren: () => import('../../components/register/register.module').then(m => m.RegisterModule)
    //   },
    // ]
  },
];

@NgModule({
  declarations: [
    CompanySelectedOfferComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    InfoAboutCompanyPanelInOfferModule,
    ListOfCompanyOffertsPanelInOfferModule
  ],
  exports: [
    CompanySelectedOfferComponent
  ]
})
export class CompanySelectedOfferModule { }
