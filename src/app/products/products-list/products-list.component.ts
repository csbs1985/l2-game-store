import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { IProduct } from '../../models/product.interface';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'rsm-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, AsyncPipe]
})
export class ProductsListComponent {

  private service = inject(ProductsService);
  private cartService = inject(CartService);
  products$ = this.service.load();

  addProductToCart(product: IProduct): void {
    this.cartService.addProduct(product);
  }
}
