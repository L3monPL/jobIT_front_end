import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    trigger('joinRegister', [
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
export class RegisterComponent implements OnInit{

  registerShow = true

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  linkLogin(){
    this.registerShow = !this.registerShow
    setTimeout(() => { this.router.navigateByUrl('/company/login') }, 300)
  }

}
