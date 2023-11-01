import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];
