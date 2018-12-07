import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeGridCardComponent } from './recipe-grid-card.component';

describe('RecipeGridCardComponent', () => {
  let component: RecipeGridCardComponent;
  let fixture: ComponentFixture<RecipeGridCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeGridCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeGridCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
