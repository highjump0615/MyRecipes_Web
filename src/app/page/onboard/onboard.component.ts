import {Component, OnInit, ViewChild} from '@angular/core';
import {OwlcarouselDirective} from '../../directives/owlcarousel.directive';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  @ViewChild(OwlcarouselDirective) carousel;

  isLastPage = false;

  owlCarouselOptions: Object; // 宣告 Owl Carousel 的 Options

  constructor() {
    this.owlCarouselOptions = { // 設定 Owl Carousel Options
      items: 1,
      navigation: true,
      onTranslate: (e) => {
        // check if reaches last page
        this.isLastPage = e.page.index >= (e.page.count - 1);
      }
    };
  }

  ngOnInit() {
  }

  onButNext() {
    // go to next on carousel
    this.carousel.next();
  }

  onButSkip() {
  }
}
