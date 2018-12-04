import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-password',
  templateUrl: './signup-password.component.html',
  styleUrls: ['../signup-email/signup-email.component.scss']
})
export class SignupPasswordComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onButNext() {
    // go to signup profile page
    this.router.navigate(['signup/profile']);
  }
}
