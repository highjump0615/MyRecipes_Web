import {Component, NgZone} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  owlCarouselOptions: Object; // 宣告 Owl Carousel 的 Options

  constructor(private _zone: NgZone) {
    this.owlCarouselOptions = { // 設定 Owl Carousel Options
      items: 5,
      dots: true,
      navigation: true,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      loop: true,
      onTranslate: (e) => _zone.run(() => console.log('is translated, the page index is: ' + e.page.index)),
    };
  }
}
