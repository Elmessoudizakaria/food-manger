import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IngredientContainer } from "./containers/ingredient/ingredient.container";

const routes: Routes = [
  {
    path: "",
    component: IngredientContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientRoutingModule {}
