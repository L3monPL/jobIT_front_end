import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerCompanyOfferService {

  titleForm?: string

  fromSalaryForm?: number
  toSalaryForm?: number

  expForm?: number

  aboutForm?: string

  stackForm?: [
    {
      id: number,
      name: string
    }
  ]

  constructor() { }
}
