import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FirebaseManager} from '../../helpers/firebase-manager';
import {User} from '../../models/user';
import {Tip} from '../../models/tip';
import {DataStoreService} from '../../services/data-store.service';

@Component({
  selector: 'app-cooking-tip',
  templateUrl: './cooking-tip.component.html',
  styleUrls: ['./cooking-tip.component.scss']
})
export class CookingTipComponent implements OnInit {

  userCurrent: User;
  tipsAll: Array<Tip> = [];
  tips: Array<Tip> = [];

  constructor(
    private router: Router,
    private dataStore: DataStoreService
  ) {
    // set current user
    this.userCurrent = User.currentUser;

    this.tips = this.dataStore.cookingTips;

    // fetch tips
    const dbRef = FirebaseManager.ref();

    const query = dbRef.child(Tip.TABLE_NAME);
    query.once('value')
      .then((snapshot) => {
        console.log(snapshot);

        // clear
        const aryTip = [];

        snapshot.forEach(function(child) {
          const t = new Tip(child);

          aryTip.push(t);
        });

        this.tipsAll = aryTip;
        this.tips = aryTip;
      })
      .catch((err) => {
        console.log(err);
      });

  }

  ngOnInit() {
  }

  onButNew() {
    // go to new recipe page
    this.router.navigate(['tip/new']);
  }

  onChangeKeyword(value) {
    this.tips = [];

    // filter tips with keyword
    for (const t of this.tipsAll) {
      if (t.title.indexOf(value) >= 0) {
        this.tips.push(t);
        continue;
      }

      if (t.content.indexOf(value) >= 0) {
        this.tips.push(t);
      }
    }
  }
}
