import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {User} from '../../models/user';
import {MatDialog} from '@angular/material';
import {ErrorDialogComponent} from '../../dialogs/error-dialog/error-dialog.component';



@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  constructor(
    public dialog?: MatDialog
  ) { }

  ngOnInit() {
  }

  /**
   * show error alert
   * @param title
   * @param msg
   */
  showErrorDialg(title, msg) {
    this.dialog.open(ErrorDialogComponent, {
      width: '350px',
      data: {
        title: title,
        msg: msg
      }
    });
  }
}
