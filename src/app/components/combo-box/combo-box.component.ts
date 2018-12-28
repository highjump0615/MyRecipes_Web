import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})
export class ComboBoxComponent implements OnInit {

  showDropDown = false;

  constructor() { }

  ngOnInit() {
  }

  onItemSelected($event) {

    // hide dropdown
    this.hideDropDown();

    // update input
  }

  hideDropDown() {
    this.showDropDown = false;
  }

  onFocusInput() {
    // show dropdown
    this.showDropDown = true;
  }

  onBlurInput() {
    this.hideDropDown();
  }

}
