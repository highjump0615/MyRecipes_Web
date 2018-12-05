import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-profile',
  templateUrl: './signup-profile.component.html',
  styleUrls: ['../signup-email/signup-email.component.scss']
})
export class SignupProfileComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onButNext() {
    // go to allergies page
    this.router.navigate(['signup/favourite']);
  }
}
