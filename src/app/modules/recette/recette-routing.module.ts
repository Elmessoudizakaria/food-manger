import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecetteContainer } from "./containers/recette/recette.container";
import { RecetteDetailComponent } from "./components/recette-detail/recette-detail.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/recette",
    pathMatch: "full"
  },
  {
    path: "recette",
    component: RecetteContainer
  },
  { path: "detail", component: RecetteDetailComponent, data: { recette: {} } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecetteRoutingModule {}
