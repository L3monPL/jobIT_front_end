import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerCompanyOfferService } from 'src/app/services/manager-services/manager-company-offer.service';

@Component({
  selector: 'app-company-create-offer-page',
  templateUrl: './company-create-offer-page.component.html',
  styleUrls: ['./company-create-offer-page.component.scss']
})
export class CompanyCreateOfferPageComponent {

  constructor(
    public managerCompanyOffer: ManagerCompanyOfferService,
    private router: Router
  ) { }

  back(){
    this.router.navigateByUrl('./company')
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
