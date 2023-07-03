import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private dataSource: string = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get(this.dataSource) as Observable<Product[]>;
  }

  getProduct(slug: string): Observable<Product> {
    return this.http.get(this.dataSource + '/' + slug) as Observable<Product>;
  }
}
