import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {OwlcarouselDirective} from '../../directives/owlcarousel.directive';
import {Router} from '@angular/router';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.component.html',
  styleUrls: ['./onboard.component.scss']
})
export class OnboardComponent implements OnInit {

  @ViewChild(OwlcarouselDirective) carousel;

  isLastPage = false;

  owlCarouselOptions: Object; // 宣告 Owl Carousel 的 Options

  constructor(
    private router: Router,
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {
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
    if (this.isLastPage) {
      // go to log in page
      this.goToNext();
      return;
    }

    // go to next on carousel
    this.carousel.next();
  }

  onButSkip() {
    // go to log in page
    this.goToNext();
  }

  /**
   * go to next page
   */
  goToNext() {
    // set onboard flag
    this.storage.set(AppComponent.KEY_ONBOARD, true);

    this.router.navigate(['login']);
  }
}
