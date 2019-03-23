import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-hscroll-container',
  templateUrl: './hscroll-container.component.html',
  styleUrls: ['./hscroll-container.component.scss']
})
export class HscrollContainerComponent implements OnInit {

  @ViewChild('scrollWrapper') scrollWrapper;
  @Input() offset = 50;

  constructor() { }

  ngOnInit() {
  }

  checkOverflow() {
    return this.scrollWrapper.nativeElement.offsetWidth < this.scrollWrapper.nativeElement.scrollWidth;
  }

  onButLeft() {
    this.scrollBy(-this.offset);
  }

  onButRight() {
    this.scrollBy(this.offset);
  }

  scrollBy(withOffset) {
    const wrapper = jQuery(this.scrollWrapper.nativeElement);
    const curLeft = this.scrollWrapper.nativeElement.scrollLeft;
    wrapper.animate({scrollLeft: curLeft + withOffset}, 200);
  }
}
