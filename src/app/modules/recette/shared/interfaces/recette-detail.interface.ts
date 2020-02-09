import { Recette } from "src/app/shared/interfaces/recette.interface";
import { Ingredient } from "src/app/shared/interfaces/ingredient.interface";
import { Observable } from "rxjs";

export interface RecetteDetail extends Recette {
  toppingsDetail: Observable<Ingredient>[];
}
