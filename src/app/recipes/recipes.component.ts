// import { Component, OnInit } from '@angular/core';

// import { Recipe } from './recipe.model';
// import { RecipeService } from './recipe.service';

// @Component({
//   selector: 'app-recipes',
//   templateUrl: './recipes.component.html',
//   styleUrls: ['./recipes.component.css'],
//   providers: [RecipeService]
// })
// export class RecipesComponent implements OnInit {
//   selectedRecipe: Recipe;

//   constructor(private recipeService: RecipeService) { }

//   ngOnInit() {
//     this.recipeService.recipeSelected
//       .subscribe(
//         (recipe: Recipe) => {
//           this.selectedRecipe = recipe;
//         }
//       );
//   }

// }

//improve code
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
