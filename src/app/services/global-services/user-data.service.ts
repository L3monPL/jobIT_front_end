import { Injectable } from '@angular/core';
import { Freelancer } from '../user-rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  fakeUser: Freelancer = {
    id: 0,
    name: "Tomasz",
    surname: "Kowalski",
    email: "testowy@freelancer.com",
    role: 'admin',
    created_at: '17.03.2023'
  }

  tokenId?: number

  user: any //user|company

  setFreelancer(freelancer: any){ //user
    this.user = freelancer;
  }

  setFreelancerFake(){ //user
    this.user = this.fakeUser;
  }

  setCompany(company: any){ //company
    this.user = company;
  }

  getUser(){
    return this.user
  }

  constructor() { }
}
