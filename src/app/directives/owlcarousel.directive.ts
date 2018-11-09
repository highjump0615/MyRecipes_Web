import {AfterViewChecked, Directive, ElementRef, Input, OnDestroy} from '@angular/core';

@Directive({
  selector: '[appOwlcarousel]'
})
export class OwlcarouselDirective implements AfterViewChecked, OnDestroy {

  $el: JQuery;
  @Input() owlOptions: Object; // 可以透過 component 個別設定 owl carousel 的 options，達到不同頁面的客製化輪播。

  private _items: any[]; // 這個應該是多的，忘了刪除。

  constructor(el: ElementRef) {
    this.$el = $(el.nativeElement);
  }

  ngAfterViewChecked() {
    this.initOwl(); // 初始化 Owl Carousel。
  }

  ngOnDestroy() {
    this.destroyOwl(); // 換頁時將 Owl Carousel 從 Element 上釋放。
  }

  initOwl() {
    if (
      this.$el.find('.item').length && // 由於論播內容可能是經由 API 來的，所以要確定 Owl Carousel 內有東西可執行。
      typeof $.fn.owlCarousel === 'function' && // 確定 Owl Carousel 有被載入。
      // Owl Carousel 執行並初始化在 element 上時會加上 .owl-loaded 代表該 element 已初始化，
      // 此行是用以確保因為 ngAfterViewChecked 會一直重覆 check 的特性導致該 element 一直被重覆初始化 Owl Carousel，致使瀏覽器效能低下。
      !this.$el.hasClass('owl-loaded')
    ) {
      setTimeout(() => {
        this.$el.owlCarousel(this.owlOptions);
      }, 0);
    }
  }

  destroyOwl() {
    if (this.$el) {
      this.$el.trigger('destroy.owl.carousel')
        .removeClass('owl-loaded owl-hidden')
        .find('.owl-stage:empty, .owl-item:empty')
        .remove();
    }
  }
  reInitOwl() {
    // 在同一個 component 中只有切換資料的時候，並不會觸發 ngOnDestroy，如果發生這樣的事情
    // 請在載入其他資料完成時 call 這段程式，Owl Carousel 會重新初始化
    this.destroyOwl();
    this.initOwl();
  }

}
