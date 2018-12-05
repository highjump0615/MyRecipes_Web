import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-cuisine-item',
  templateUrl: './cuisine-item.component.html',
  styleUrls: ['./cuisine-item.component.scss']
})
export class CuisineItemComponent implements OnInit {

  @Input() text: string;

  /**
   * item is selected or not
   */
  selected = false;

  constructor() { }

  ngOnInit() {
  }

  onSelectChanged(event) {
    this.selected = !this.selected;
  }

}
