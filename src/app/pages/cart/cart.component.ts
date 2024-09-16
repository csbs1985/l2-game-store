import { Component } from '@angular/core';
import { CartDeliveryComponent } from './cart-delivery/cart-delivery.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartTotalSummaryComponent } from './cart-total-summary/cart-total-summary.component';

@Component({
  selector: 'l2-cart',
  templateUrl: './cart.component.html',
  standalone: true,
  imports: [CartListComponent, CartTotalSummaryComponent, CartDeliveryComponent]
})
export class CartComponent {
}
