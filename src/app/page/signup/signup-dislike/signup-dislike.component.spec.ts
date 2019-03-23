import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDislikeComponent } from './signup-dislike.component';

describe('SignupDislikeComponent', () => {
  let component: SignupDislikeComponent;
  let fixture: ComponentFixture<SignupDislikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupDislikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDislikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
