import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoptionListPage } from './adoption-list.page';

const routes: Routes = [
  {
    path: '',
    component: AdoptionListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoptionListPageRoutingModule {}
