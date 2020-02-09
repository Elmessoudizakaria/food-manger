import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Recette } from "src/app/shared/interfaces/recette.interface";
import { IngredientService } from "src/app/modules/ingredient/shared/services/ingredient.service";
import { RecetteDetail } from "../interfaces/recette-detail.interface";
import { Observable, of, Subject } from "rxjs";
import { Ingredient } from "src/app/shared/interfaces/ingredient.interface";
@Injectable()
export class RecetteService {
  public recettes$: Observable<Recette[]> = this.recettes();
  public recette$: Observable<RecetteDetail>;
  public test$ = new Subject<RecetteDetail>();
  public ingredients$: Observable<
    Ingredient[]
  > = this.ingredientService.ingredients();

  constructor(
    private http: HttpClient,
    private readonly ingredientService: IngredientService
  ) {}

  recettes() {
    return this.http.get<Recette[]>("http://localhost:3000/recettes");
  }

  addRecette(recette: Recette) {
    return this.http.post<Recette>("http://localhost:3000/recettes", recette);
  }

  recetteDetail(id: number) {
    return this.http.get<Recette>(`http://localhost:3000/recettes/${id}`);
  }

  recetteDetailRR(id: number) {
    return this.http
      .get<RecetteDetail>(`http://localhost:3000/recettes/${id}`)
      .subscribe(el => {
        el.toppingsDetail = el.toppings.map(id =>
          this.ingredientService.ingredientDetail(id)
        );
        // this.recette$ = of(el);
        this.test$.next(el);
      });
  }
}
