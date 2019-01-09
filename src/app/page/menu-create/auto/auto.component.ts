import {Component, Inject, OnInit} from '@angular/core';
import {BaseCuisineComponent} from '../../base/base-cuisine.component';
import {SESSION_STORAGE, StorageService} from 'ngx-webstorage-service';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.scss']
})
export class AutoComponent extends BaseCuisineComponent implements OnInit {

  constructor(
    @Inject(SESSION_STORAGE) public storage: StorageService
  ) {
    super(storage, false);
  }

  ngOnInit() {
  }

}
