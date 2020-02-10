import { Component     , OnInit     } from '@angular/core'                                   ;
import { FormBuilder   , Validators } from '@angular/forms'                                  ;
import { Router                     } from '@angular/router'                                 ;
import { Observable                 } from 'rxjs'                                            ;
import { Ingredient                 } from 'src/app/shared/interfaces/ingredient.interface'  ;
import { Recette                    } from 'src/app/shared/interfaces/recette.interface'     ;
import { RecetteDetail              } from '../../shared/interfaces/recette-detail.interface';
import { RecetteService             } from '../../shared/services/recette.service'           ;

@Component({
  selector: 'app-recette',
  templateUrl: './recette.container.html',
  styleUrls: ['./recette.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class RecetteContainer implements OnInit {
  recettes$: Observable<Recette[]> = this.recetteService.recettes$;
  recette$: Observable<RecetteDetail> = this.recetteService.recette$;
  ingredients$: Observable<Ingredient[]> = this.recetteService.ingredients$;

  constructor(
    private recetteService: RecetteService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  form = this.fb.group({
    recette: this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      prix: [10, Validators.required],
      toppings: ['', Validators.required],
    }),
  });
  ngOnInit(): void {
    this.recetteService.onDestroy();
    this.recetteService.loadRecettes();
  }
  addRecette() {
    this.recetteService.addRecette(this.form.get('recette').value);
  }

  getRecetteDetail(id: number) {
    this.recetteService.recetteDetail(id);
    this.router.navigate(['/detail']);
  }
}
