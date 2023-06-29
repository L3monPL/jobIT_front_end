import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerCompanyOfferService } from 'src/app/services/manager-services/manager-company-offer.service';

@Component({
  selector: 'app-company-create-offer-page',
  templateUrl: './company-create-offer-page.component.html',
  styleUrls: ['./company-create-offer-page.component.scss'],
  animations: [
    trigger('In', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
      animate('0.50s', style({ opacity: 1 })),
    ]),
    ])
  ]
})
export class CompanyCreateOfferPageComponent {

  constructor(
    public managerCompanyOffer: ManagerCompanyOfferService,
    private router: Router
  ) { }

  back(){
    this.router.navigateByUrl('./company')
  }

  startCreateOffer(): boolean{
    let title = this.managerCompanyOffer.titleForm
    let fromSalaryForm = this.managerCompanyOffer.fromSalaryForm
    let toSalaryForm = this.managerCompanyOffer.toSalaryForm
    let expForm = this.managerCompanyOffer.expForm
    let aboutForm = this.managerCompanyOffer.aboutForm
    let stackForm = this.managerCompanyOffer.stackForm.length
    let additionalStackForm = this.managerCompanyOffer.additionalStackForm.length
    let responsibilitiesForm = this.managerCompanyOffer.responsibilitiesForm.length
    let expectationsForm = this.managerCompanyOffer.expectationsForm.length

    let value = true
    if (title || fromSalaryForm || toSalaryForm  || expForm  || aboutForm  || stackForm  || additionalStackForm  || responsibilitiesForm  || expectationsForm) {
      value = false
    }
    return value
  }

  stackForm(stackForm: any): Array<any>{
    let array = []
    for (let index = 0; index < stackForm.length; index++) {
      console.log(stackForm[index].name)
      if (stackForm[index].name != '') {
        array.push(stackForm[index])
      }
    }
    return array
  }

  additionalStackForm(additionalStackForm: any): Array<any>{
    let array = []
    for (let index = 0; index < additionalStackForm.length; index++) {
      console.log(additionalStackForm[index].name)
      if (additionalStackForm[index].name != '') {
        array.push(additionalStackForm[index])
      }
    }
    return array
  }

  responsibilitiesForm(responsibilitiesForm: any): Array<any>{
    let array = []
    for (let index = 0; index < responsibilitiesForm.length; index++) {
      console.log(responsibilitiesForm[index].name)
      if (responsibilitiesForm[index].name != '') {
        array.push(responsibilitiesForm[index])
      }
    }
    return array
  }

  expectationsForm(expectationsForm: any): Array<any>{
    let array = []
    for (let index = 0; index < expectationsForm.length; index++) {
      console.log(expectationsForm[index].name)
      if (expectationsForm[index].name != '') {
        array.push(expectationsForm[index])
      }
    }
    return array
  }

}
