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

  private cartService = inject(CartService);

  onRemove(): void {
    this.cartService.removeProduct(this.cartItem.product);
  }
}
