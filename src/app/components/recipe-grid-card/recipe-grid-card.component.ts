import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-recipe-grid-card',
  templateUrl: './recipe-grid-card.component.html',
  styleUrls: ['./recipe-grid-card.component.scss']
})
export class RecipeGridCardComponent implements OnInit {

  @Input() showDate = true;

  constructor() { }

  ngOnInit() {
  }

}
