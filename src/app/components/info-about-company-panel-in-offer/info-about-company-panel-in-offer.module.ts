import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoAboutCompanyPanelInOfferComponent } from './info-about-company-panel-in-offer.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    InfoAboutCompanyPanelInOfferComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    InfoAboutCompanyPanelInOfferComponent
  ]
})
export class InfoAboutCompanyPanelInOfferModule { }
