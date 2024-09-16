import { CurrencyPipe, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'l2-cart-total-summary',
  templateUrl: './cart-total-summary.component.html',
  standalone: true,
  imports: [CurrencyPipe, NgIf]
})
export class CartTotalSummaryComponent {
  protected _cartService = inject(CartService);
}
