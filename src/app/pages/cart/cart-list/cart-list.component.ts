import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'rsm-cart-list',
  templateUrl: './cart-list.component.html',
  standalone: true,
  imports: [CartItemComponent, AsyncPipe]
})
export class CartListComponent {

  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;

}
