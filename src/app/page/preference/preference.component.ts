import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.scss']
})
export class PreferenceComponent implements OnInit {

  // recipes
  favourites: Array<string> = [];
  allergies: Array<string> = [];
  diets: Array<string> = [];
  dislikes: Array<string> = [];

  constructor() {
    // init data
    for (let i = 0; i < 4; i++) {
      this.favourites.push('aa');
      this.allergies.push('aa');
      this.diets.push('aa');
      this.dislikes.push('aa');
    }
  }

  ngOnInit() {
  }

}
