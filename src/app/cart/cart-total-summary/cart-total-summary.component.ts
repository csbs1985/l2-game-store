import { Component, inject } from '@angular/core';

import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'rsm-cart-total-summary',
  templateUrl: './cart-total-summary.component.html',
  styleUrls: ['./cart-total-summary.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, AsyncPipe, CurrencyPipe]
})
export class CartTotalSummaryComponent {

  cartService = inject(CartService);
}
