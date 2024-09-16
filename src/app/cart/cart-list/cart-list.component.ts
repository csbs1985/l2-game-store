import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CartService } from '../../services/cart.service';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'rsm-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  standalone: true,
  imports: [MatCardModule, CartItemComponent, AsyncPipe]
})
export class CartListComponent {

  private cartService = inject(CartService);

  cartItems = this.cartService.cartItems;

}
