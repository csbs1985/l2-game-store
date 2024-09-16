import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CartListComponent } from '../cart-list/cart-list.component';
import { CartTotalSummaryComponent } from '../cart-total-summary/cart-total-summary.component';

@Component({
    selector: 'rsm-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    standalone: true,
    imports: [MatToolbarModule, CartListComponent, CartTotalSummaryComponent]
})
export class CartComponent {

}
