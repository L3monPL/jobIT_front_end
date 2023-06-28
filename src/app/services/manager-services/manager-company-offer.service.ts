import { Injectable } from '@angular/core';

export interface StackForm{
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class ManagerCompanyOfferService {

  titleForm?: string

  fromSalaryForm?: number
  toSalaryForm?: number

  expForm: number = 0

  aboutForm: string = '';
  receivedText: string = '';

  stackForm: Array<StackForm> = [
    
  ]

  
  additionalStackForm: Array<StackForm> = [

  ]

  responsibilitiesForm: Array<StackForm> = [

  ]

  constructor() { }

  onTextChange(){
    this.aboutForm = this.aboutForm.replace(/\r\n|\r|\n/g, '\n');
    this.receivedText = this.aboutForm.replace(/\n/g, '<br>');
  }

  addStack(){
    this.stackForm.push(
      {
        name: ''
      }
    )
  }

  addAdditionalStack(){
    this.additionalStackForm.push(
      {
        name: ''
      }
    )
  }

  addResponsibilitiesForm(){
    this.responsibilitiesForm.push(
      {
        name: ''
      }
    )
  }

}
