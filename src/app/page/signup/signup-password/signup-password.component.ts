import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataStoreService} from '../../../services/data-store.service';

@Component({
  selector: 'app-signup-password',
  templateUrl: './signup-password.component.html',
  styleUrls: ['../signup-email/signup-email.component.scss']
})
export class SignupPasswordComponent implements OnInit {

  password = '';

  constructor(
    private router: Router,
    private dataStore: DataStoreService
  ) {
  }

  ngOnInit() {
  }

  onButNext() {
    // go to signup profile page
    this.router.navigate(['signup/profile']);
  }
}
