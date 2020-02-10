import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { IngredientService } from 'src/app/modules/ingredient/shared/services/ingredient.service';
import { Ingredient } from 'src/app/shared/interfaces/ingredient.interface';
import { Recette } from 'src/app/shared/interfaces/recette.interface';
import { environment } from 'src/environments/environment';
import { RecetteDetail } from '../interfaces/recette-detail.interface';
@Injectable()
export class RecetteService {
  constructor(
    private http: HttpClient,
    private readonly ingredientService: IngredientService,
  ) {}

  loadRecettes() {
    return this.http.get<Recette[]>(`${environment.api}/recettes`);
  }

  addRecette(recette: Recette) {
    return this.http.post<Recette>(`${environment.api}/recettes`, recette);
  }

  recetteDetail(id: number) {
    return this.http.get<RecetteDetail>(`${environment.api}/recettes/${id}`);
  }

  deleteRecette(id: number) {
    return this.http.delete<Recette>(`${environment.api}/recettes/${id}`);
  }
}
