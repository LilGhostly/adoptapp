import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalDetailPage } from './animal-details.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalDetailsPageRoutingModule {}
