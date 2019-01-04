import {Component, OnInit, ViewChild} from '@angular/core';
import {FormGroupDirective} from '@angular/forms';
import {Tip} from '../../models/tip';
import {DataStoreService} from '../../services/data-store.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tip-create',
  templateUrl: './tip-create.component.html',
  styleUrls: ['./tip-create.component.scss']
})
export class TipCreateComponent implements OnInit {

  title = '';
  content = '';

  constructor(
    private router: Router,
    private dataStore: DataStoreService
  ) { }

  ngOnInit() {
  }

  onAdd() {
    // add new cooking tip
    const tipNew = new Tip();

    tipNew.title = this.title;
    tipNew.content = this.content;

    tipNew.saveToDatabase();

    this.dataStore.cookingTips.push(tipNew);

    // back to list page
    this.router.navigate(['cooking-tip']);
  }
}
