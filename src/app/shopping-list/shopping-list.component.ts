import { Component } from '@angular/core';
import { Ingrediant } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {
  ingrediants: Ingrediant[] = [
    new Ingrediant('Apples', 5),
    new Ingrediant('Tomatoes', 10),
  ];
  constructor() {}
}
