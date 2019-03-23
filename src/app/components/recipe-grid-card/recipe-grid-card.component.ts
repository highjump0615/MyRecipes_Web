import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe';

@Component({
  selector: 'app-recipe-grid-card',
  templateUrl: './recipe-grid-card.component.html',
  styleUrls: ['./recipe-grid-card.component.scss']
})
export class RecipeGridCardComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() showDate = true;

  constructor() { }

  ngOnInit() {
  }

}
