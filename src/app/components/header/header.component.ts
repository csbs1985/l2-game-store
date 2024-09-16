import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'l2-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [RouterModule]
})
export class HeaderComponent {
  private _cartService = inject(CartService);

  cartCount = this._cartService.cartCount;
}
