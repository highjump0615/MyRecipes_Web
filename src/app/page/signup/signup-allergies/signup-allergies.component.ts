import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-allergies',
  templateUrl: './signup-allergies.component.html',
  styleUrls: ['./signup-allergies.component.scss']
})
export class SignupAllergiesComponent implements OnInit {

  allergies: Array<string> = [];
  diets: Array<string> = [];

  constructor(
    private router: Router
  ) {
    // init data
    for (let i = 0; i < 3; i++) {
      this.allergies.push('aa');
    }

    for (let i = 0; i < 15; i++) {
      this.diets.push('aa');
    }
  }

  ngOnInit() {
  }

  onButNext() {
    // go to signup allergies page
    this.router.navigate(['signup/dislike']);
  }

}
