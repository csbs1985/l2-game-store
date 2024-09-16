import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartDeliveryComponent } from './cart-delivery/cart-delivery.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartTotalSummaryComponent } from './cart-total-summary/cart-total-summary.component';

@Component({
  selector: 'l2-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [AsyncPipe, CartListComponent, CartTotalSummaryComponent, CartDeliveryComponent]
})
export class CartComponent {
  protected _cartService = inject(CartService);

  cartLength = this._cartService.cartItems.length;
}
