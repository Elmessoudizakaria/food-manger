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
  private recettes = new BehaviorSubject<Recette[]>([{}]);
  public recettes$: Observable<Recette[]> = this.recettes.asObservable();
  private recette = new BehaviorSubject<RecetteDetail>({});
  public recette$ = this.recette.asObservable();
  public test$ = new Subject<RecetteDetail>();
  public ingredients$: Observable<
    Ingredient[]
  > = this.ingredientService.ingredients();

  private subscriptions: Subscription[] = [];

  constructor(
    private http: HttpClient,
    private readonly ingredientService: IngredientService,
  ) {}

  loadRecettes() {
    this.subscriptions.push(
      this.http
        .get<Recette[]>(`${environment.api}/recettes`)
        .subscribe(el => this.recettes.next(el)),
    );
  }

  addRecette(recette: Recette) {
    this.subscriptions.push(
      this.http
        .post<Recette>(`${environment.api}/recettes`, recette)
        .subscribe(el => this.loadRecettes()),
    );
  }

  recetteDetail(id: number) {
    this.subscriptions.push(
      this.http
        .get<RecetteDetail>(`${environment.api}/recettes/${id}`)
        .subscribe(el => {
          el.toppingsDetail = el.toppings.map(id =>
            this.ingredientService.ingredientDetail(id),
          );
          this.recette.next(el);
          // this.test$.next(el);
        }),
    );
  }

  onDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
