import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-favourite',
  templateUrl: './signup-favourite.component.html',
  styleUrls: ['../signup-allergies/signup-allergies.component.scss']
})
export class SignupFavouriteComponent implements OnInit {

  favourites: Array<string> = [];

  constructor(
    private router: Router
  ) {
    // init data
    for (let i = 0; i < 23; i++) {
      this.favourites.push('aa');
    }
  }

  ngOnInit() {
  }

  onButNext() {
    // go to signup allergies page
    this.router.navigate(['signup/allergy']);
  }

}
