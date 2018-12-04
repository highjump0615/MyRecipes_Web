import {AfterContentInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-expand-menu-item',
  templateUrl: './expand-menu-item.component.html',
  styleUrls: ['./expand-menu-item.component.scss']
})
export class ExpandMenuItemComponent implements AfterContentInit {

  @ViewChild('content') content;

  @Input() title: string;
  @Input() icon: string;
  @Input() expanded = false;

  @Output() toggle = new EventEmitter<any>();

  constructor() { }

  public onToggleSubMenu($event): boolean {
    this.toggle.emit($event);

    return false;
  }

  ngAfterContentInit(): void {
    this.expandContent(this.expanded, false)
  }

  expandContent(expand, animation = true) {
    const submenu = jQuery(this.content.nativeElement);

    if (expand) {
      // show
      submenu.slideDown(animation ? 350 : 0);
    } else {
      // hide
      submenu.slideUp(animation ? 350 : 0);
    }

    this.expanded = expand;

    console.log('expandContent: ' + expand);
  }

}
