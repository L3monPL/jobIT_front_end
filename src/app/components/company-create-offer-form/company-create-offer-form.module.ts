import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyCreateOfferFormComponent } from './company-create-offer-form.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    CompanyCreateOfferFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TextFieldModule,
    MatIconModule
  ],
  exports: [
    CompanyCreateOfferFormComponent
  ]
})
export class CompanyCreateOfferFormModule { }
