import { Component    , OnInit } from '@angular/core'                   ;
import { RecetteSanbox } from '../../containers/recette/recette.sandbox';


@Component({
  selector: 'app-recette-detail',
  templateUrl: './recette-detail.component.html',
  styleUrls: ['./recette-detail.component.scss'],
})
export class RecetteDetailComponent implements OnInit {
  recette$ = this.recetteSandbox.recette$;
  constructor(private recetteSandbox: RecetteSanbox) {}

  ngOnInit(): void {}
}
