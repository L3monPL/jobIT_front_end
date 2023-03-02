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
    },
    {
      id: 6,
      title: 'Testowe ogłoszenie test!@#123',
      date: '12-02-2023',
      salary: '6000 zł - 9500 zł',
      company: 'AVG Systems',
      remote: true,
      locations: ['warszawa', 'poznań', 'katowice'],
      stack: ['TypeScript', 'Node.js', 'kubernets']
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
    //ten if zabezpiecza przed odkliknięciem z menu kontekstowego na element z listy
    if (this.isOpenMenuLocalization == false) {
      console.log("clicked at element on list") 
    }
  }

  

  openMenuLocations(id: number, event: MouseEvent){
    this.isOpenMenuLocalization = !this.isOpenMenuLocalization
    this.currentClicableItemLocationID = id
    console.log(this.isOpenMenuLocalization)
    this.menuClicked = true
    event.stopPropagation();
    this.onClick()
    return this.isOpenMenuLocalization
  }

  @HostListener('document:click', ['$event'])
  onClick(event?: MouseEvent) {
    if (this.menuClicked) {
      // obsługa kliknięcia poza elementem #menu
      console.log('na lokalizacje')
    }
    else{
      // this.menuClicked = true;
      console.log('poza lokalizacją')
      this.isOpenMenuLocalization = false
    }
    this.menuClicked = false
    
  }

}
