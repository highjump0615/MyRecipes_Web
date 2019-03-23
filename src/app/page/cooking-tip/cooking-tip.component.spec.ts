import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingTipComponent } from './cooking-tip.component';

describe('CookingTipComponent', () => {
  let component: CookingTipComponent;
  let fixture: ComponentFixture<CookingTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
