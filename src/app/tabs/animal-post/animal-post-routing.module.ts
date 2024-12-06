import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalPostPage } from './animal-post.page';

const routes: Routes = [
  {
    path: '',
    component: AnimalPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalPostPageRoutingModule {}
