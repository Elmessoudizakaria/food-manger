import { Component    , OnInit     } from '@angular/core'                                   ;
import { FormBuilder  , Validators } from '@angular/forms'                                  ;
import { Router                    } from '@angular/router'                                 ;
import { Observable                } from 'rxjs'                                            ;
import { Ingredient                } from 'src/app/shared/interfaces/ingredient.interface'  ;
import { Recette                   } from 'src/app/shared/interfaces/recette.interface'     ;
import { RecetteDetail             } from '../../shared/interfaces/recette-detail.interface';
import { RecetteSanbox             } from './recette.sandbox'                               ;

@Component({
  selector: 'app-recette',
  templateUrl: './recette.container.html',
  styleUrls: ['./recette.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class RecetteContainer implements OnInit {
  recettes$: Observable<Recette[]> = this.recetteSanbox.recettes$;
  recette$: Observable<RecetteDetail> = this.recetteSanbox.recette$;
  ingredients$: Observable<Ingredient[]> = this.recetteSanbox.ingredients$;

  constructor(
    private recetteSanbox: RecetteSanbox,
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
    console.log('test');
    this.recetteSanbox.onDestroy();
    this.recetteSanbox.loadRecettes();
  }
  addRecette() {
    const recette = this.form.get('recette').value;
    console.log(recette);
    this.recetteSanbox.addRecette(recette);
  }

  deleteRecete(id: number) {
    this.recetteSanbox.deleteRecette(id);
  }

  getRecetteDetail(id: number) {
    this.recetteSanbox.recetteDetail(id);
    this.router.navigate(['/recette/detail']);
  }

  // test() {
  //   this.recette$.subscribe(el => {
  //     const recette = {
  //       name: el.name,
  //       description: el.description,
  //       prix: el.prix,
  //       toppings: el.toppings,
  //     };
  //     this.form.get('recette').setValue(recette);
  //   });
  // }
}
