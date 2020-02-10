import { Injectable  } from '@angular/core'                                 ;
import { HttpClient  } from '@angular/common/http'                          ;
import { Ingredient  } from 'src/app/shared/interfaces/ingredient.interface';
import { environment } from 'src/environments/environment'                  ;

@Injectable()
export class IngredientService {
  constructor(private http: HttpClient) {}

  ingredients() {
    return this.http.get<Ingredient[]>(`${environment.api}/ingredients`);
  }
  ingredientDetail(id: number) {
    return this.http.get<Ingredient>(`${environment.api}/ingredients/${id}`);
  }
}
