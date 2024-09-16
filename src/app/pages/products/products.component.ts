import { AsyncPipe, CurrencyPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'rsm-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe, NgIf]
})
export class ProductsComponent {
  private _cartService = inject(CartService);
  private _productService = inject(ProductService);

  products$ = this._productService.load();

  addProductToCart(product: IProduct): void {
    this._cartService.addProduct(product);
  }
}
