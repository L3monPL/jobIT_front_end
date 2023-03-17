import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  tokenId?: number

  user: any //user|company

  setFreelancer(freelancer: any){ //user
    this.user = freelancer;
  }

  setCompany(company: any){ //company
    this.user = company;
  }

  getUser(){
    return this.user
  }

  constructor() { }
}
