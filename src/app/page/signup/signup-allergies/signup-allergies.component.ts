import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-allergies',
  templateUrl: './signup-allergies.component.html',
  styleUrls: ['./signup-allergies.component.scss']
})
export class SignupAllergiesComponent implements OnInit {

  menus = [
    {
      title: 'Allergies',
      selected: false,
      expandable: true,
      expanded: true,
    },
    {
      title: 'Diets',
      selected: false,
      expandable: true,
      expanded: false,
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
