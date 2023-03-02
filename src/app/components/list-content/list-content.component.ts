import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-content',
  templateUrl: './list-content.component.html',
  styleUrls: ['./list-content.component.scss']
})
export class ListContentComponent implements OnInit {

  itemList = [
    {
      id: 0,
      title: 'Testowe ogłoszenie TeamLider',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'poznań', 'katowice'],
      stack: ['Angular', 'Node.js', 'RxJS']
    },
    {
      id: 1,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa'],
      stack: ['Angular', 'Node.js', 'RxJS']
    },
    {
      id: 2,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['katowice'],
      stack: ['Angular', 'Node.js', 'RxJS']
    },
    {
      id: 3,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'poznań'],
      stack: ['Angular', 'Node.js', 'RxJS']
    },
    {
      id: 4,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'katowice'],
      stack: ['Angular', 'Node.js', 'RxJS']
    },
    {
      id: 5,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'poznań', 'katowice', 'wrocław', 'szczecin'],
      stack: ['Angular', 'Node.js', 'RxJS']
    },
    {
      id: 6,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'poznań', 'katowice'],
      stack: ['Angular', 'Node.js', 'RxJS']
    },
    {
      id: 7,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'poznań', 'katowice'],
      stack: ['Angular', 'Node.js', 'RxJS']
    },
    {
      id: 8,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'poznań', 'katowice'],
      stack: ['Angular', 'Node.js', 'RxJS']
    },
    {
      id: 9,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'poznań', 'katowice'],
      stack: ['Angular', 'Node.js', 'RxJS']
    },

  ]

  isOpenMenuLocalization = false

  currentClicableItemLocationID?: number
  menuClicked = false

  constructor(){ 

  }

  ngOnInit(): void {

  }

  selectItemOnList(){
    console.log("clicked at element")
  }

  

  openMenuLocations(id: number, event: MouseEvent){
    event.stopPropagation();
    this.isOpenMenuLocalization = !this.isOpenMenuLocalization
    this.currentClicableItemLocationID = id
    console.log(this.isOpenMenuLocalization)
    this.menuClicked = true
    return this.isOpenMenuLocalization
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.menuClicked) {
      // obsługa kliknięcia poza elementem #menu
      console.log('na element')
    }
    else{
      // this.menuClicked = true;
      console.log('poza elementem')
      this.isOpenMenuLocalization = false
    }
    this.menuClicked = false
    
  }

}
