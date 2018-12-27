import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent implements OnInit {

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
