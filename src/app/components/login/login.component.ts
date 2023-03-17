import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('joinLogin', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate(400, style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate(300, style({
          opacity: 0
        }))
      ]),
    ])
  ]
})
export class LoginComponent implements OnInit {

  loginShow = true

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  linkRegister(){
    this.loginShow = !this.loginShow
    setTimeout(() => { this.router.navigateByUrl('/company/register') }, 300)
  }

}
