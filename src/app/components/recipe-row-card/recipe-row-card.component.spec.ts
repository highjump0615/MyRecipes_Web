import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRowCardComponent } from './recipe-row-card.component';

describe('RecipeRowCardComponent', () => {
  let component: RecipeRowCardComponent;
  let fixture: ComponentFixture<RecipeRowCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeRowCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeRowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
