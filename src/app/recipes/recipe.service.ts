//add database connection using firebase
import { Subject } from 'rxjs';
// import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Tasty Schnitzel',
  //     'A super-tasty Schnitzel - just awesome!',
  //     'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG/1280px-Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
  //     [new Ingredient('Chicken Breast', 1), new Ingredient('French Fries', 20)]
  //   ),
  //   new Recipe(
  //     'Big Fat Burger',
  //     'What else do you need to say?',
  //     'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Beef', 1),
  //       new Ingredient('Lettuce', 1),
  //       new Ingredient('Tomatoes', 2),
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  public get Recipes() {
    return this.recipes.slice(); // return a copy
  }

  public set Recipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  public getRecipe(index: number) {
    return this.recipes[index];
  }

  public addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  public updateRecipe(id: number, recipe: Recipe) {
    this.recipes[id] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  public deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}


//hard coded data

// import { EventEmitter, Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
// import { Recipe } from './recipe.model';
// import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from '../shopping-list/shopping-list.service';


// @Injectable()//inject service 
// export class RecipeService {
//   recipeSelected = new Subject<Recipe[]>();
//   recipesChanged = new Subject<Recipe[]>();
//   private recipes: Recipe[] = [
//     new Recipe(
//       'Tasty Schnitzel',
//       'A super-tasty Schnitzel - just awesome!',
//       'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
//       [
//         new Ingredient('Paneer', 1),
//         new Ingredient('French Fries', 20)
//       ]),
//     new Recipe('Burger',
//       'What else you need to say?',
//       'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
//       [
//         new Ingredient('Buns', 2),
//         new Ingredient('Paneer', 1),
//         new Ingredient('cheese', 1)
//       ])
//   ];

//   constructor(private slService: ShoppingListService) {}

//   getRecipes() {
//     return this.recipes.slice();
//   }
//   getRecipe(index: number) {
//     return this.recipes[index];
//   }
//   addIngredientsToShoppingList(ingredients: Ingredient[]) {
//     this.slService.addIngredients(ingredients);
//   }
//   public addRecipe(recipe: Recipe) {
//     this.recipes.push(recipe);
//     this.recipesChanged.next(this.recipes.slice());
//   }

//   public updateRecipe(id: number, recipe: Recipe) {
//     this.recipes[id] = recipe;
//     this.recipesChanged.next(this.recipes.slice());
//   }
//   deleteRecipe(index:number){
//     this.recipes.splice(index, 1);
//     this. recipesChanged.next(this.recipes.slice());
//   }
// }
