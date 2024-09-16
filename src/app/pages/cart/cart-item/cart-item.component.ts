import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { ICartItem } from 'src/app/models/cart-item.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'rsm-cart-item',
  templateUrl: './cart-item.component.html',
  standalone: true,
  imports: [CurrencyPipe]
})
export class CartItemComponent {

  @Input({ required: true, alias: 'item' }) cartItem !: ICartItem;

  quantityOptions = [1, 2, 3, 4, 5];

  private cartService = inject(CartService);

  onQuantityChange(quantity: number, cartItem: ICartItem) {
    cartItem.quantity = quantity;
    this.cartService.updateCartQuantity(cartItem);
  }

  onRemove(): void {
    this.cartService.removeProduct(this.cartItem.product);
  }
}
