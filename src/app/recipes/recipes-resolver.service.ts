import { Injectable, inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Recipe } from './recipe.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Observable } from 'rxjs';
import { RecipeService } from './recipe.service';

export const RecipeResolverService: ResolveFn<
  Observable<Recipe[]> | Promise<Recipe[]> | Recipe[]
> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  dataStorageService: DataStorageService = inject(DataStorageService),
  recipeService: RecipeService = inject(RecipeService)
) => {
  const recipes = recipeService.getRecipes();
  if (recipes.length === 0) {
    return dataStorageService.fetchRecipes();
  } else {
    return recipes;
  }
};

// @Injectable({ providedIn: 'root' })
// export class RecipeResolverService implements Resolve<Recipe[]> {
//   constructor(
//     private dataStorageService: DataStorageService,
//     private recipeService: RecipeService
//   ) {}
//   resolve(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
//     const recipes = this.recipeService.getRecipes();
//     if (recipes.length === 0) {
//       return this.dataStorageService.fetchRecipes();
//     } else {
//       return recipes;
//     }
//   }
// }
