import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFavouriteComponent } from './signup-favourite.component';

describe('SignupFavouriteComponent', () => {
  let component: SignupFavouriteComponent;
  let fixture: ComponentFixture<SignupFavouriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupFavouriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
