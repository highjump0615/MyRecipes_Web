import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss']
})

export class ComboBoxComponent implements OnInit {

  static KEY_INDEX = 'index';
  static KEY_NAME = 'name';

  showDropDown = false;

  @Input() text = '';


  private _listAll: Array<any>;
  get listAll(): Array<any> {
    return this._listAll;
  }

  @Input()
  set listAll(data: Array<any>) {
    this._listAll = data;

    // init filter list
    for (const i of this.listAll) {
      this.list.push(i);
    }
  }

  @Output() textChange = new EventEmitter();
  list: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  onItemSelected(index) {
    console.log(index);

    this.text = this.list[index].name;
    this.textChange.emit(this.text);
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

  onChangeText(event) {
    this.text = event;

    this.list = [];

    // filter list
    for (const t of this.listAll) {
      if (t.name.indexOf(this.text) >= 0) {
        this.list.push(t);
      }
    }

    // if no list item, hide the drop down
    this.showDropDown = this.list.length > 0;

    this.textChange.emit(event);
  }
}
