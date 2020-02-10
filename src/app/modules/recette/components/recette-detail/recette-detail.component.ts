import { Component     , OnInit } from '@angular/core'                        ;
import { RecetteService         } from '../../shared/services/recette.service';

@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.scss'],
})
export class RecetteDetailComponent implements OnInit {
  recette$ = this.recetteService.recette$;
  constructor(private recetteService: RecetteService) {}

  ngOnInit(): void {}
}
