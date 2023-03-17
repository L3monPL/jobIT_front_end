import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/global-services/user-data.service';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent implements OnInit{

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
