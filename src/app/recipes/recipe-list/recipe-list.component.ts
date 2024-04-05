import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Simple test',
      'https://www.budgetbytes.com/wp-content/uploads/2018/09/Basic-Chili-in-Bowl-V2-1200-800x1067.jpg'
    ),
    new Recipe(
      'A Test Recipe -2',
      'Simple test -2',
      'https://www.budgetbytes.com/wp-content/uploads/2023/05/Pasta-Primavera-V3-800x1067.jpg'
    ),
  ];
  constructor() {}
  ngOnIt() {}
}
