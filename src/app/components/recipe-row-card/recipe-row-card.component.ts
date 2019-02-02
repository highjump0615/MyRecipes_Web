import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../models/recipe';

@Component({
  selector: 'app-recipe-row-card',
  templateUrl: './recipe-row-card.component.html',
  styleUrls: ['./recipe-row-card.component.scss']
})
export class RecipeRowCardComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
