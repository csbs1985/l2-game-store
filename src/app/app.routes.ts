import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'store', pathMatch: 'full' },
  { path: 'store', loadComponent: () => import('./pages/store/store.component').then(c => c.StoreComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent) },
  { path: '**', redirectTo: 'store' }
];
