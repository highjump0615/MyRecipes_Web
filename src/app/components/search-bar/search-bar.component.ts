import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() textChange = new EventEmitter();

  keyword = '';

  constructor() { }

  ngOnInit() {
  }

  onChangeText(event) {
    this.keyword = event;

    this.textChange.emit(event);
  }

}
