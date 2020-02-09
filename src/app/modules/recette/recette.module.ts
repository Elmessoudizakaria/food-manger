import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MaterialAngularModule } from "../material-angualr/material-angualr.module";
import { AddRecetteComponent } from "./components/add-recette/add-recette.component";
import { RecetteListComponent } from "./components/recette-list/recette-list.component";
import { RecetteContainer } from "./containers/recette/recette.container";
import { RecetteRoutingModule } from "./recette-routing.module";
import { RecetteService } from "./shared/services/recette.service";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { IngredientService } from "../ingredient/shared/services/ingredient.service";
import { RecetteDetailComponent } from './components/recette-detail/recette-detail.component';

@NgModule({
  declarations: [RecetteContainer, RecetteListComponent, AddRecetteComponent, RecetteDetailComponent],
  imports: [
    CommonModule,
    RecetteRoutingModule,
    HttpClientModule,
    MaterialAngularModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [RecetteService, IngredientService]
})
export class RecetteModule {}
