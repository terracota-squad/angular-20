import { Routes } from '@angular/router';
import { About } from './pages/about/about';
import { NotFound } from './pages/not-found/not-found';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'about',
    component: About
  },
  {
    path: '**',
    component: NotFound
  }  
];
