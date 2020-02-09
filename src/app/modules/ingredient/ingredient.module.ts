import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { IngredientListComponent } from "./components/ingredient-list/ingredient-list.component";
import { IngredientContainer } from "./containers/ingredient/ingredient.container";
import { IngredientRoutingModule } from "./ingredient-routing.module";

@NgModule({
  declarations: [IngredientListComponent, IngredientContainer],
  imports: [CommonModule, HttpClientModule, IngredientRoutingModule]
})
export class IngredientModule {}
