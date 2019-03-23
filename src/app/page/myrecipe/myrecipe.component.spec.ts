import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyrecipeComponent } from './myrecipe.component';

describe('MyrecipeComponent', () => {
  let component: MyrecipeComponent;
  let fixture: ComponentFixture<MyrecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyrecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
