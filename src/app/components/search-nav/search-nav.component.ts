import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.scss']
})
export class SearchNavComponent implements OnInit {

  technology = [
    {
      id: 1,
      name: 'All',
      image: 'assets/all.png'
    },
    {
      id: 2,
      name: 'JS',
      image: 'assets/js.png'
    },
    {
      id: 3,
      name: 'Java',
      image: 'assets/js.png'
    },
    {
      id: 4,
      name: '.NET',
      image: 'assets/js.png'
    },
    {
      id: 5,
      name: 'PHP',
      image: 'assets/js.png'
    },
    {
      id: 6,
      name: 'HTML',
      image: 'assets/js.png'
    },
    {
      id: 7,
      name: 'Angular',
      image: 'assets/js.png'
    },
    {
      id: 8,
      name: 'React',
      image: 'assets/js.png'
    },
    {
      id: 9,
      name: 'Mobile',
      image: 'assets/js.png'
    },
    {
      id: 10,
      name: 'Testing',
      image: 'assets/js.png'
    },
    {
      id: 11,
      name: 'PHP',
      image: 'assets/js.png'
    },
    {
      id: 12,
      name: 'Python',
      image: 'assets/js.png'
    },
    {
      id: 13,
      name: 'Game',
      image: 'assets/js.png'
    },
    {
      id: 14,
      name: 'Data',
      image: 'assets/js.png'
    },
  ]

  constructor(){ 

  }

  ngOnInit(): void {
    
  }

}
