import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandMenuItemComponent } from './expand-menu-item.component';

describe('ExpandMenuItemComponent', () => {
  let component: ExpandMenuItemComponent;
  let fixture: ComponentFixture<ExpandMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
