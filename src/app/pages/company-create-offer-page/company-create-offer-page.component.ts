import { Component } from '@angular/core';
import { ManagerCompanyOfferService } from 'src/app/services/manager-services/manager-company-offer.service';

@Component({
  selector: 'app-company-create-offer-page',
  templateUrl: './company-create-offer-page.component.html',
  styleUrls: ['./company-create-offer-page.component.scss']
})
export class CompanyCreateOfferPageComponent {

  constructor(
    public managerCompanyOffer: ManagerCompanyOfferService
  ) { }

  back(){
    // this.router.navigateByUrl('./company')
  }

}
