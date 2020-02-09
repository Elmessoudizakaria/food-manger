import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./modules/recette/recette.module").then(md => md.RecetteModule)
  },
  {
    path: "topping",
    loadChildren: () =>
      import("./modules/ingredient/ingredient.module").then(
        md => md.IngredientModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
