import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { DataStorageService } from "../shared/data-storange.service";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
@Injectable({providedIn:'root' })
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private dataStorageService: DataStorageService, private recipeService:RecipeService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeService.Recipes;
        if (recipes.length === 0) {
          return this.dataStorageService.fetchRecipes();
        }
        return recipes;
      }
}