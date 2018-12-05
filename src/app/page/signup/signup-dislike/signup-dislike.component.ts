import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-dislike',
  templateUrl: './signup-dislike.component.html',
  styleUrls: ['./signup-dislike.component.scss']
})
export class SignupDislikeComponent implements OnInit {

  dislikes: Array<string> = [];

  constructor(
    private router: Router
  ) {
    // init data
    for (let i = 0; i < 4; i++) {
      this.dislikes.push('aa');
    }
  }

  ngOnInit() {
  }

  onButNext() {
  }

}
