import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.css']
})
export class OnboardComponent implements OnInit {

  owlCarouselOptions: Object; // 宣告 Owl Carousel 的 Options

  constructor() {
    this.owlCarouselOptions = { // 設定 Owl Carousel Options
      items: 1,
      navigation: true,
      onTranslate: (e) => {
        console.log('is translated, the page index is: ' + e.page.index);
      }
    };
  }

  ngOnInit() {
  }

}
