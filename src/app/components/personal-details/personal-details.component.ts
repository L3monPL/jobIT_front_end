import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/global-services/user-data.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss'],
  animations: [
    trigger('joinUser', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1.6s', keyframes([
          style({opacity: 0}),
          style({opacity: 0}),
          style({opacity: 1}),
          style({opacity: 1}),
        ]))
      ])
    ]),
    trigger('joinAbout', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('1.9s', keyframes([
          style({opacity: 0}),
          style({opacity: 0}),
          style({opacity: 1}),
          style({opacity: 1}),
        ]))
      ])
    ]),
    trigger('joinSkills', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('2.1s', keyframes([
          style({opacity: 0}),
          style({opacity: 0}),
          style({opacity: 1}),
          style({opacity: 1}),
        ]))
      ])
    ]),
    trigger('joinContact', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('2.3s', keyframes([
          style({opacity: 0}),
          style({opacity: 0}),
          style({opacity: 1}),
          style({opacity: 1}),
        ]))
      ])
    ]),
    trigger('joinExperience', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('2.5s', keyframes([
          style({opacity: 0}),
          style({opacity: 0}),
          style({opacity: 1}),
          style({opacity: 1}),
        ]))
      ])
    ]),

  ]
})
export class PersonalDetailsComponent implements OnInit{

  textAboutMe?: string = 
  `Skills and expirience you can find below, so here I'm gonna focus on my off-work life.
I'm not a typical IT guy. I love traveling, spending time outside and do some extreme sports 😅
If you want to work together, feel free to message me. I will consider every offer.`

  skills = [
    {
      id: 0,
      name: 'TypeScript'
    },
    {
      id: 1,
      name: 'CSS'
    },
    {
      id: 2,
      name: 'HTML'
    },
    {
      id: 3,
      name: 'Angular'
    },
    {
      id: 4,
      name: 'RxJS'
    }
    ,
    {
      id: 5,
      name: 'RWD'
    },
    {
      id: 6,
      name: 'Http'
    },
    {
      id: 7,
      name: 'Material Design'
    }
  ]

  experiences = [
    {
      id: 0,
      name: 'Senior Front-end Developer',
      date: '02.02.2022 - obecnie',
      company: 'Allegro'
    },
    {
      id: 1,
      name: 'Junior Front-end Developer',
      date: '09.12.2018 - obecnie',
      company: 'Webinex'
    }
  ]

  constructor(
    private router: Router,
    public userData: UserDataService
  ){ }

  ngOnInit(): void {
    if (!this.userData.getUser()) {
      this.router.navigateByUrl('/company/login')
    }
  }


}
