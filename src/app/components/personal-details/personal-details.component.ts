import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/global-services/user-data.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
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
