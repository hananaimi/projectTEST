import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { WorldRecipesComponent } from './world-recipes/world-recipes.component';
import { AllRecipesByCountryComponent } from './all-recipes-by-country/all-recipes-by-country.component';
import { AllRecipesByCategoryComponent } from './all-recipes-by-category/all-recipes-by-category.component';
import { SingleRecipeComponent } from './single-recipe/single-recipe.component';
import { FeedbacksListComponent } from './feedbacks-list/feedbacks-list.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'home', component: HomeComponent },

  { path: 'categories', component: CategoryPageComponent },

  { path: 'all-recipes', component: WorldRecipesComponent },

  { path: 'contact', component: ContactComponent },

  {path: 'feedbacks', component: FeedbacksListComponent},

  { path: 'all-recipes/:country', component: AllRecipesByCountryComponent },

  { path: 'categories/:category', component: AllRecipesByCategoryComponent },

  { path: 'meal/:idMeal', component: SingleRecipeComponent },

  { path: 'search', component: SearchComponent },
  { path: 'allRecepies', component: AllRecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
