import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'products'
  },
  {
    path: 'products',
    loadComponent: () => import('./pages/products/products.component').then(c => c.ProductsComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart/cart.component').then(c => c.CartComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];
