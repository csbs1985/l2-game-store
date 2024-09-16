import { CurrencyPipe } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { ICartItem } from 'src/app/models/cart-item.interface';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'rsm-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatOptionModule, MatButtonModule, MatIconModule, CurrencyPipe]
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
