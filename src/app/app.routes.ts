import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'products'
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.routes').then(r => r.PRODUCT_ROUTES)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/cart/cart/cart.component').then(c => c.CartComponent)
  }
];
