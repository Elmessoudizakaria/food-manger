import { Observable } from 'rxjs'                                          ;
import { Ingredient } from 'src/app/shared/interfaces/ingredient.interface';

export interface RecetteDetail {
  id            ?: number                  ;
  name          ?: string                  ;
  description   ?: string                  ;
  prix          ?: number                  ;
  toppings      ?: number[]                ;
  toppingsDetail?: Observable<Ingredient>[];
}
