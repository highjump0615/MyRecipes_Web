import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAllergiesComponent } from './signup-allergies.component';

describe('SignupAllergiesComponent', () => {
  let component: SignupAllergiesComponent;
  let fixture: ComponentFixture<SignupAllergiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAllergiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAllergiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
