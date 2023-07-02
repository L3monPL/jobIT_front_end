import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-settings-page',
  templateUrl: './profile-settings-page.component.html',
  styleUrls: ['./profile-settings-page.component.scss']
})
export class ProfileSettingsPageComponent implements OnInit{

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  back(){
    this.router.navigateByUrl('./company')
  }

}
