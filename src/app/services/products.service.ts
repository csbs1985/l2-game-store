import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  private products: IProduct[] = [];

  private readonly API = `/products`;
  private readonly isLocal = true;

  load(): Observable<IProduct[]> {
    if (this.isLocal) {
      for (let num = 1; num <= 10; num++) {
        this.addProducts(num);
      }
      return of(this.products);
    }
    return this.http.get<IProduct[]>(this.API);
  }

  create(product: IProduct): Observable<IProduct> {
    if (this.isLocal) {
      this.products.push(product);
      return of(product);
    }
    return this.http.post<IProduct>(this.API, product);
  }

  private addProducts(i: number): void {
    this.products.push({
      id: `${i}`,
      price: parseFloat((Math.random() * (0.0 - 10.0) + 10.0).toFixed(2)),
      name: ['Coffee'][Math.floor(Math.random() * 1)],
      description: ['B & W', 'Grey', 'Black', 'Green', 'Black'][Math.floor(Math.random() * 5)],
      cover: `${i}`,
      dimension: {
        width: parseFloat((Math.random() * (0.0 - 10.0) + 10.0).toFixed(2)),
        height: parseFloat((Math.random() * (0.0 - 10.0) + 10.0).toFixed(2)),
        length: parseFloat((Math.random() * (0.0 - 10.0) + 10.0).toFixed(2))
      }
    });
  }
}
