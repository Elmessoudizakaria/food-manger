import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/shared/interfaces/ingredient.interface';
import { Recette } from 'src/app/shared/interfaces/recette.interface';
import { RecetteDetail } from '../../shared/interfaces/recette-detail.interface';
import { RecetteService } from '../../shared/services/recette.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.container.html',
  styleUrls: ['./recette.container.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class RecetteContainer implements OnInit, OnDestroy {
  recettes$: Observable<Recette[]> = this.recetteService.recettes$;
  recette$: Observable<RecetteDetail> = this.recetteService.test$;
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
    this.recetteService.loadRecettes();
  }

  ngOnDestroy(): void {
    this.recetteService.onDestroy();
  }
  addRecette() {
    this.recetteService.addRecette(this.form.get('recette').value);
  }

  getRecetteDetail(id: number) {
    this.recetteService.recetteDetail(id);
    this.router.navigate(['/detail']);
  }
}
