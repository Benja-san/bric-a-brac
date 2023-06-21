import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url: string = 'assets/data/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get(this.url) as Observable<Product[]>;
  }

  getProduct(slug: string): Observable<Product> {
    return this.http.get<Product[]>(this.url).pipe(
      map((products: Product[]) => {
        return products.find((product) => product.slug === slug) as Product;
      })
    );
  }
}
