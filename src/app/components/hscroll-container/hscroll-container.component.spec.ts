import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HscrollContainerComponent } from './hscroll-container.component';

describe('HscrollContainerComponent', () => {
  let component: HscrollContainerComponent;
  let fixture: ComponentFixture<HscrollContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HscrollContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HscrollContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
