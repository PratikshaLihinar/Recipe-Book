import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from '../recipes/recipe.service';
import { exhaustMap, map, take, tap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private static readonly baseUrl =
    'https://recipe-book-project-3578f-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient, private recipeService: RecipeService,private authService: AuthService) {}

  storeRecipes() {
    const recipes = this.recipeService.Recipes;
    this.http
      .put<Recipe[]>(`${DataStorageService.baseUrl}/recipes.json`, recipes)
      .subscribe((response) => console.log(response));
  }

  fetchRecipes() {
    return this.http
    .get<Recipe[]>(`${DataStorageService.baseUrl}/recipes.json`)
    .pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          // Prevent ingredients from being null as the user is not
          // required to enter ingredients for a recipe.
          // Note that alternatively we could have done this in addRecipe
          // and updateRecipe methods of the RecipeService.
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => (this.recipeService.Recipes = recipes))
    );
 
   
    
}
}

// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";

// import { Recipe } from "../recipes/recipe.model";
// import { RecipeService } from "../recipes/recipe.service";

// @Injectable({providedIn:'root'})
// export class DataStorageService{
//     constructor(private http:HttpClient, private recipeService: RecipeService){}
//     storeRecipes(){
//         const recipes = this.recipeService.getRecipes();
//        return this.http.put('https://recipe-book-project-3578f-default-rtdb.firebaseio.com/recipes.json', recipes)
//        .subscribe(response=>{
//         console.log(response);
        
//        });
//     }

//     fetchRecipes(){
//         this.http
//         .get<Recipe[]>('https://recipe-book-project-3578f-default-rtdb.firebaseio.com/recipes.json')
//         .subscribe((recipes) =>{
//             // console.log(recipes);
//             this.recipeService.setRecipes(recipes);
//         });
//     }
// }

