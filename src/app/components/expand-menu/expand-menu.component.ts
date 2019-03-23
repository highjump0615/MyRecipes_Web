import {AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {ExpandMenuItemComponent} from './expand-menu-item/expand-menu-item.component';

@Component({
  selector: 'app-expand-menu',
  templateUrl: './expand-menu.component.html',
  styleUrls: ['./expand-menu.component.scss']
})
export class ExpandMenuComponent implements AfterContentInit {

  /**
   * expand multiple menu item at once
   */
  @Input() multiple = false;

  @ContentChildren(ExpandMenuItemComponent) items: QueryList<ExpandMenuItemComponent>;

  constructor() { }


  ngAfterContentInit() {
    // Open the first panel
    if (!this.multiple) {
      this.items.toArray()[0].expanded = true;
    }

    // Loop through all panels
    this.items.toArray().forEach((item) => {
      // subscribe panel toggle event
      item.toggle.subscribe(() => {
        // Open the panel
        this.openPanel(item);
      });
    });
  }

  openPanel(item: ExpandMenuItemComponent) {
    if (this.multiple) {
      // toggle current menu item
      item.toggleContent();
    } else {
      // close all panels and open new
      this.items.toArray().forEach(p => {
        p.expandContent(p === item);
      });
    }
  }

}
