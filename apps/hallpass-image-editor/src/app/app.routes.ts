import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];
