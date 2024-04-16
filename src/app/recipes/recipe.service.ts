import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pan Seared Steak',
      'Perfectly crusted, + a whole lot of flavor!',
      'https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2023/01/caesar-salad-crispy-chicken-1080x1256.jpg',
      [new Ingredient('salad', 6), new Ingredient('croutons', 10)]
    ),
    new Recipe(
      'Butternut Squash Soup',
      'It’s surprisingly light yet satiating at the same time.',
      'https://www.hsph.harvard.edu/nutritionsource/wp-content/uploads/sites/30/2015/11/Soup_Garnish_edited-1024x683.jpg',
      [
        new Ingredient('Medium leek', 2),
        new Ingredient('Sprigs parsley', 5),
        new Ingredient('Whole black peppercorns', 10),
      ]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredints(ingredients);
  }
}
