import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRateComponent } from './star-rate.component';

describe('StarRateComponent', () => {
  let component: StarRateComponent;
  let fixture: ComponentFixture<StarRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
