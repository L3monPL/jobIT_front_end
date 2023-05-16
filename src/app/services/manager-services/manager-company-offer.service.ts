import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ManagerCompanyOfferService {

  titleForm?: string

  fromSalaryForm?: number
  toSalaryForm?: number

  expForm?: number

  aboutForm: string = '';
  receivedText: string = '';

  stackForm = [
    {
      // id: 0,
      name: ''
    }
  ]

  constructor() { }

  onTextChange(){
    this.aboutForm = this.aboutForm.replace(/\r\n|\r|\n/g, '\n');
    this.receivedText = this.aboutForm.replace(/\n/g, '<br>');
  }

  addStack(){
    this.stackForm.push(
      {
        // id: this.stackForm.length,
        name: ''
      }
    )
  }

}
