import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  userCurrent: User;

  constructor() {
    // set current user
    this.userCurrent = User.currentUser;
  }

  ngOnInit() {
  }

}
