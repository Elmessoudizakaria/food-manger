import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetteContainer } from './containers/recette/recette.container';
import { RecetteDetailComponent } from './components/recette-detail/recette-detail.component';
import { AddRecetteComponent } from './components/add-recette/add-recette.component';
import { RecetteListComponent } from './components/recette-list/recette-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/recette',
    pathMatch: 'full',
  },
  {
    path: 'recette',
    component: RecetteContainer,
    children: [
      {
        path: 'detail',
        component: RecetteDetailComponent,
      },
      // {
      //   path: 'add',
      //   component: AddRecetteComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecetteRoutingModule {}
