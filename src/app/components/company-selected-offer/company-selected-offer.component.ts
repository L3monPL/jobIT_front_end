import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-selected-offer',
  templateUrl: './company-selected-offer.component.html',
  styleUrls: ['./company-selected-offer.component.scss']
})
export class CompanySelectedOfferComponent implements OnInit{

  constructor(
    private router: Router
  ) { }
  
  ngOnInit(): void {

  }

  back(){
    this.router.navigateByUrl('./company')
  }

}
