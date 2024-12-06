import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Asegúrate de importar el guardia

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',  // Esta ruta carga los tabs
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard] // Protege los tabs para usuarios autenticados
  },
  {
    path: '',
    redirectTo: 'login', // Si no está autenticado, redirige al login
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'animal-details/:id',
    loadChildren: () => import('./animal-details/animal-details.module').then(m => m.AnimalDetailsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard] // Asegúrate de que los usuarios estén autenticados para acceder
  },
  {
    path: 'adoption-list',
    loadChildren: () => import('./tabs/adoption-list/adoption-list.module').then(m => m.AdoptionListPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    loadChildren: () => import('./tabs/profile/profile.module').then(m => m.ProfilePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
