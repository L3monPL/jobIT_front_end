import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-company-offerts-panel-in-offer',
  templateUrl: './list-of-company-offerts-panel-in-offer.component.html',
  styleUrls: ['./list-of-company-offerts-panel-in-offer.component.scss']
})
export class ListOfCompanyOffertsPanelInOfferComponent implements OnInit{

  itemList = [
    {
      id: 0,
      title: 'Junior Specjalist IT Network Operations',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'poznań', 'katowice'],
      stack: ['ip networks', 'it support', 'english']
    },
    {
      id: 1,
      title: 'Devops Engineer',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa'],
      stack: ['kubernets', 'ubuntu', 'amazon aws']
    },
    {
      id: 2,
      title: 'Angular Frontend Developer',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['katowice'],
      stack: ['Angular', 'TypeScript', 'RxJS']
    },
    {
      id: 3,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'poznań'],
      stack: ['Angular', 'Node.js', 'amazon aws']
    },
    {
      id: 4,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'katowice'],
      stack: ['it support', 'Node.js', 'TypeScript']
    },
    {
      id: 5,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'poznań', 'katowice', 'wrocław', 'szczecin'],
      stack: ['Angular', 'TypeScript', 'RxJS']
    }
  ]

  constructor(
    private router: Router
  ){ }

  ngOnInit(): void {

  }

  selectItemOnList(id: number){
    this.router.navigateByUrl(`/company/${id}`)
  }

}
