import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Ingredient } from "src/app/shared/interfaces/ingredient.interface";

@Injectable()
export class IngredientService {
  constructor(private http: HttpClient) {}

  ingredients() {
    return this.http.get<Ingredient[]>("http://localhost:3000/ingredients");
  }
  ingredientDetail(id: number) {
    return this.http.get<Ingredient>(`http://localhost:3000/ingredients/${id}`);
  }
}
