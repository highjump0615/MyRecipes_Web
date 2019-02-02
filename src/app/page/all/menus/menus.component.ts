import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../../models/recipe';
import {Menu} from '../../../models/menu';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  menus: Array<Menu> = [];

  constructor() { }

  ngOnInit() {
  }

}
