import { CommonModule           } from '@angular/common'                                     ;
import { HttpClientModule       } from '@angular/common/http'                                ;
import { NgModule               } from '@angular/core'                                       ;
import { FlexLayoutModule       } from '@angular/flex-layout'                                ;
import { ReactiveFormsModule    } from '@angular/forms'                                      ;
import { IngredientService      } from '../ingredient/shared/services/ingredient.service'    ;
import { MaterialAngularModule  } from '../material-angualr/material-angualr.module'         ;
import { AddRecetteComponent    } from './components/add-recette/add-recette.component'      ;
import { RecetteDetailComponent } from './components/recette-detail/recette-detail.component';
import { RecetteListComponent   } from './components/recette-list/recette-list.component'    ;
import { RecetteContainer       } from './containers/recette/recette.container'              ;
import { RecetteSanbox          } from './containers/recette/recette.sandbox'                ;
import { RecetteRoutingModule   } from './recette-routing.module'                            ;
import { RecetteService         } from './shared/services/recette.service'                   ;

@NgModule({
  declarations: [
    RecetteContainer,
    RecetteListComponent,
    AddRecetteComponent,
    RecetteDetailComponent,
  ],
  imports: [
    CommonModule,
    RecetteRoutingModule,
    HttpClientModule,
    MaterialAngularModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [RecetteService, IngredientService, RecetteSanbox],
})
export class RecetteModule {}
