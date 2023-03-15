import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.scss'],
  animations: [
    trigger('join', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(200, style({
          transform: 'scale(0.95)',
          opacity: 1
        })),
        animate(100, style({
          transform: 'scale(1)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class SearchNavComponent implements OnInit {

  @ViewChild('list') list?: ElementRef
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
      image: 'assets/java.png'
    },
    {
      id: 4,
      name: '.NET',
      image: 'assets/net.png'
    },
    {
      id: 5,
      name: 'PHP',
      image: 'assets/php.png'
    },
    {
      id: 6,
      name: 'HTML',
      image: 'assets/html.png'
    },
    {
      id: 7,
      name: 'Angular',
      image: 'assets/angular.png'
    },
    {
      id: 8,
      name: 'React',
      image: 'assets/react.png'
    },
    {
      id: 9,
      name: 'Mobile',
      image: 'assets/mobile.png'
    },
    {
      id: 10,
      name: 'Testing',
      image: 'assets/testing.png'
    },
    {
      id: 11,
      name: 'Python',
      image: 'assets/python.png'
    },
    {
      id: 12,
      name: 'Game',
      image: 'assets/js.png'
    },
    {
      id: 13,
      name: 'Data',
      image: 'assets/js.png'
    },
  ]

  constructor(){ 

  }

  ngOnInit(): void {
    
  }

  prev() {
    this.list!.nativeElement.scrollTop -= 220;

  }

  next() {
    this.list!.nativeElement.scrollTop += 220;

  }
  

}
