import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  userCurrent: User;

  constructor() {
    // set current user
    this.userCurrent = User.currentUser;
  }

  ngOnInit() {
  }

}
