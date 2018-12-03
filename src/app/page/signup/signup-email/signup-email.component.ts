import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup-email.component.html',
  styleUrls: ['./signup-email.component.scss']
})
export class SignupEmailComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onButNext() {
    // go to signup password page
    this.router.navigate(['signup/password']);
  }

}
