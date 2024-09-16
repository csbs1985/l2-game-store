import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

import { CartService } from '../../services/cart.service';

@Component({
  selector: 'rsm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, MatIconModule, AsyncPipe]
})
export class HeaderComponent {

  private cartService = inject(CartService);
  cartCount = this.cartService.cartCount;
}
