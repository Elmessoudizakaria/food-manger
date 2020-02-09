import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { RecetteService } from "../../shared/services/recette.service";
import { FormBuilder, Validators } from "@angular/forms";
import { Recette } from "src/app/shared/interfaces/recette.interface";
import { IngredientService } from "src/app/modules/ingredient/shared/services/ingredient.service";
import { Ingredient } from "src/app/shared/interfaces/ingredient.interface";
import { RecetteDetail } from "../../shared/interfaces/recette-detail.interface";
import { isNullOrUndefined } from "util";

@Component({
  selector: "app-recette",
  templateUrl: "./recette.container.html",
  styleUrls: ["./recette.container.scss"]
})
export class RecetteContainer implements OnInit {
  recettes$: Observable<Recette[]> = this.recetteService.recettes$;
  recette$: Observable<RecetteDetail> = this.recetteService.test$;
  ingredients$: Observable<Ingredient[]> = this.recetteService.ingredients$;

  constructor(
    private recetteService: RecetteService,
    private ingredientService: IngredientService,
    private fb: FormBuilder
  ) {}

  form = this.fb.group({
    recette: this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      prix: [10, Validators.required],
      toppings: ["", Validators.required]
    })
  });
  ngOnInit(): void {}

  loadRecettes() {
    this.recettes$ = this.recetteService.recettes();
  }
  addRecette() {
    const recette: Recette = this.form.get("recette").value;
    console.log(recette);
    this.recetteService.addRecette(recette).subscribe(el => {
      console.log(el);
      this.loadRecettes();
    });
  }

  getRecetteDetail(id: number) {
    this.recetteService.recetteDetailRR(id);
  }
}
