import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooking-tip',
  templateUrl: './cooking-tip.component.html',
  styleUrls: ['./cooking-tip.component.scss']
})
export class CookingTipComponent implements OnInit {

  tips: Array<String> = [];

  constructor() {
    // init data
    for (let i = 0; i < 2; i++) {
      this.tips.push('aa');
    }
  }

  ngOnInit() {
  }

}
