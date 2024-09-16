import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { IProduct } from 'src/app/models/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';


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
