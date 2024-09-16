import { computed, Injectable, signal } from '@angular/core';
import { ICartItem } from '../models/cart-item.interface';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = signal<ICartItem[]>([]);
  cartCount = computed(() => this.cartItems().reduce((acc, curr) => acc + curr.quantity, 0));
  cartSubTotal = computed(() => this.cartItems().reduce((acc, curr) => acc + (curr.quantity * curr.product.price), 0));
  cartTax = computed(() => this.cartSubTotal() * 0.08);
  cartTotal = computed(() => this.cartSubTotal() + this.cartTax());

  addProduct(product: IProduct): void {
    const indexFound = this.cartItems().findIndex((p) => p.product.id === product.id);
    if (indexFound >= 0) {
      const cartItem = this.cartItems()[indexFound];
      cartItem.quantity += 1;
      this.updateCartQuantity(cartItem);
    } else {
      this.cartItems.update((items) => [...items, { product, quantity: 1 }]);
    }
  }

  updateCartQuantity(cartItem: ICartItem): void {
    const indexFound = this.cartItems().findIndex((p) => p.product.id === cartItem.product.id);
    if (indexFound >= 0) {
      this.cartItems.update((items) => items.map((p) => p.product.id === cartItem.product.id ? cartItem : p));
    }
  }

  removeProduct(product: IProduct): void {
    this.cartItems.update((items) => items.filter((p) => p.product.id !== product.id));
  }
}
