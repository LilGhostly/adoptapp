import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home', // Ruta al Home
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'adoption-list', // Ruta a la lista de adopciones
        loadChildren: () => import('./adoption-list/adoption-list.module').then(m => m.AdoptionListPageModule)
      },
      {
        path: 'profile', // Ruta al perfil
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'animal-post',
        loadChildren: () => import('./animal-post/animal-post.module').then( m => m.AnimalPostPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',  // Redirige al Home por defecto
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'animal-post',
    loadChildren: () => import('./animal-post/animal-post.module').then( m => m.AnimalPostPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
