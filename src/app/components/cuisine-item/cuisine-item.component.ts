import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cuisine} from '../../models/cuisine';

@Component({
  selector: 'app-cuisine-item',
  templateUrl: './cuisine-item.component.html',
  styleUrls: ['./cuisine-item.component.scss']
})
export class CuisineItemComponent implements OnInit {

  @Input() index: number;
  @Input() item: Cuisine;
  @Output() selectChanged = new EventEmitter();

  /**
   * item is selected or not
   */
  selected = false;

  constructor() { }

  ngOnInit() {
  }

  /**
   * clicked main image
   *
   * @param {*} event
   * @memberof CuisineItemComponent
   */
  onSelectChangeed(event) {
    this.item.selected = !this.item.selected;

    this.selectChanged.emit({
      index: this.index,
      cuisine: this.item
    });
  }

}
