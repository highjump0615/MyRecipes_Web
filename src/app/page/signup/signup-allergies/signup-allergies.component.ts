import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-allergies',
  templateUrl: './signup-allergies.component.html',
  styleUrls: ['./signup-allergies.component.scss']
})
export class SignupAllergiesComponent implements OnInit {

  allergies: Array<string> = [];
  diets: Array<string> = [];

  constructor() {
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

}
