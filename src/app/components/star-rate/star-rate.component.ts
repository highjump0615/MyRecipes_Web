import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.scss']
})
export class StarRateComponent implements OnInit {

  @Input() starSize = 13;
  @Input() readOnly = true;

  @Input() rating: number;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * function used to change the value of our rating
   * triggered when user, clicks a star to change the rating
   *
   * @param index
   */
  rate(index: number) {
    if (this.readOnly) {
      return;
    }

    this.rating = index;
  }

  getColor(index: number) {
    if (this.isAboveRating(index)) {
      return '#ffeaa0';
    }

    // active color
    return '#ffd027';
  }

  /**
   * returns whether or not the selected index is above ,the current rating
   * function is called from the getColor function.
   *
   * @param index
   */
  isAboveRating(index: number): boolean {
    return index > Math.round(this.rating);
  }

}
