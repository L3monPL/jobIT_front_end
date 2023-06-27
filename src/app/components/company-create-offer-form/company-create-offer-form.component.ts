import { Component } from '@angular/core';
import { ManagerCompanyOfferService } from 'src/app/services/manager-services/manager-company-offer.service';

@Component({
  selector: 'app-company-create-offer-form',
  templateUrl: './company-create-offer-form.component.html',
  styleUrls: ['./company-create-offer-form.component.scss']
})
export class CompanyCreateOfferFormComponent {

  titleAdd = true
  salaryAdd = true
  advancedAdd = true
  infoAdd = true
  skillsAdd = true

  constructor(
    public managerCompanyOffer: ManagerCompanyOfferService
  ) { }

  deleteSkill(id: number){
    this.managerCompanyOffer.stackForm.splice(id, 1)
    console.log(id)
  }


}
