import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  public onAddToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}

// import { Route } from '@angular/compiler/src/core';
// import { Component, OnInit, Input } from '@angular/core';
// import { ActivatedRoute, Params, Router } from '@angular/router';

// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';

// @Component({
//   selector: 'app-recipe-detail',
//   templateUrl: './recipe-detail.component.html',
//   styleUrls: ['./recipe-detail.component.css']
// })
// export class RecipeDetailComponent implements OnInit {
//   // @Input() recipe: Recipe;
//   recipe: Recipe;
//   id: number;
//   constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

//   ngOnInit() {
//     this.route.params
//     .subscribe(
//       (params:Params)=> {
//         this.id = +params['id'];
//         this.recipe = this.recipeService.getRecipe(this.id);
//       }
//     );
//   }

//   onAddToShoppingList() {
//     this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
//   }
//   onEditRecipe() {
//     this.router.navigate(['edit'],{relativeTo:this.route});//current route or simple route
//     // this.router.navigate(['../',this.id,'edit'],{relativeTo: this.route});//complex route or navigation
//   }
//   onDeleteRecipe(){
//     this.recipeService.deleteRecipe(this.id);
//     this.router.navigate(['/recipes']);
//   }
// }


