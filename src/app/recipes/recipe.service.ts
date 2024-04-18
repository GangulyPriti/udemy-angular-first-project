import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'Pan Seared Steak',
      'Perfectly crusted, + a whole lot of flavor!',
      'https://www.allrecipes.com/thmb/7oYOVh1l9lGqCdqe33biDi2F8tU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/39455-marinated-tuna-steak-ddmfs-hero-3x4-0846-41bfb7a5dfb2405c9424be1ec79774ae.jpg',
      [
        new Ingredient('salad', 6),
        new Ingredient('croutons', 10),
        new Ingredient('Meat', 3),
      ]
    ),
    new Recipe(
      'Simple Macaroni and Cheese',
      'Quick, easy, and tasty macaroni and cheese dish.',
      'https://www.allrecipes.com/thmb/CanMXBeN-9DZyRSzDxLAoy0w-t8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/238691-Simple-Macaroni-And-Cheese-mfs_006-f7f521c65f894aef85e17bc9125c2c4a.jpg',
      [
        new Ingredient('(8 ounce) box elbow macaroni', 1),
        new Ingredient('Shredded Cheddar cheese', 2),
        new Ingredient('All-purpose flour', 5),
      ]
    ),
    new Recipe(
      'Spicy Baked Shrimp',
      'These spicy baked shrimp are made with spices!',
      'https://www.allrecipes.com/thmb/SLArLhf79yDdsan9fZyzSJyyY0M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7638600-fbf9ba8915004a738bc7fd4564228cae.jpg',
      [
        new Ingredient('Cajun seasoning', 2),
        new Ingredient('Chopped fresh parsley', 6),
        new Ingredient('Honey', 3),
      ]
    ),
  ];

  extraRecipe = new Recipe(
    'Chicken Tikka Masala',
    'Chicken tikka masala made easy with this great-tasting recipe',
    'https://www.allrecipes.com/thmb/2_NsCoaHuJuqNyf9JfNjjh2uQ2M=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GrilledFiveSpiceChicken.4x3-3a9a8efdbf554c42825297b82186f7e6.jpg',
    [
      new Ingredient('Yogurt', 3),
      new Ingredient('Lemon juice', 1),
      new Ingredient('Ground cumin, divided', 4),
      new Ingredient('Skinless chicken', 5),
    ]
  );
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
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
