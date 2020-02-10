import { Injectable                                  } from '@angular/core'                                         ;
import { BehaviorSubject  , Observable, Subscription } from 'rxjs'                                                  ;
import { Ingredient                                  } from 'src/app/shared/interfaces/ingredient.interface'        ;
import { Recette                                     } from 'src/app/shared/interfaces/recette.interface'           ;
import { IngredientService                           } from '../../../ingredient/shared/services/ingredient.service';
import { RecetteDetail                               } from '../../shared/interfaces/recette-detail.interface'      ;
import { RecetteService                              } from '../../shared/services/recette.service'                 ;

@Injectable()
export class RecetteSanbox {
  private recettes = new BehaviorSubject<Recette[]>([{}]);
  public recettes$: Observable<Recette[]> = this.recettes.asObservable();
  private recette = new BehaviorSubject<RecetteDetail>({});
  public recette$ = this.recette.asObservable();
  public ingredients$: Observable<
    Ingredient[]
  > = this.ingredientService.ingredients();
  private subscriptions: Subscription[] = [];
  
  constructor(
    private readonly recetteService: RecetteService,
    private readonly ingredientService: IngredientService,
  ) {}

  loadRecettes() {
    this.recetteService.loadRecettes().subscribe(el => {
      this.recettes.next(el);
    });
  }

  addRecette(recette: Recette) {
    this.recetteService
      .addRecette(recette)
      .subscribe(el => this.loadRecettes());
  }

  recetteDetail(id: number) {
    this.recetteService.recetteDetail(id).subscribe(el => {
      el.toppingsDetail = el.toppings.map(toppingId =>
        this.ingredientService.ingredientDetail(toppingId),
      );
      this.recette.next(el);
    });
  }
  deleteRecette(id: number) {
    this.recetteService.deleteRecette(id).subscribe(el => this.loadRecettes());
  }
  onDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
