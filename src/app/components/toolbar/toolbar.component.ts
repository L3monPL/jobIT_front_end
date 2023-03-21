import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/services/global-services/user-data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(
    private router: Router,
    public userData: UserDataService
  ){ }

  login(){
    this.router.navigateByUrl('/company/login')
  }

  logout(){
    this.router.navigateByUrl('/company/login')
    this.userData.setFreelancer(null) //to delete
    //to do, remove cookie
  }

  company(){
    this.router.navigateByUrl('/company')
  }

  freelancer(){
    this.router.navigateByUrl('/freelancer')
  }

}
