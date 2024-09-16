import { Component, inject } from '@angular/core';
import { DeliveryService } from 'src/app/services/delivery.service';

@Component({
  selector: 'l2-cart-delivery',
  standalone: true,
  imports: [],
  templateUrl: './cart-delivery.component.html'
})
export class CartDeliveryComponent {
  protected _deliveryService = inject(DeliveryService);
}
