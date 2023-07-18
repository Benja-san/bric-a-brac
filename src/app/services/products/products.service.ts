import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private dataSource: string = 'http://localhost:8080/api/products/';
  private token: string | null = localStorage.getItem('token');
  private headers: HttpHeaders = new HttpHeaders({
    'Content-type': 'application/json',
    accept: '*/*',
    Authorization: 'Bearer ' + this.token,
  });

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get(this.dataSource, {
      headers: this.headers,
    }) as Observable<Product[]>;
  }

  getOnSalesProducts(): Observable<Product[]> {
    return this.http.get(this.dataSource + '?onsales=true', {
      headers: this.headers,
    }) as Observable<Product[]>;
  }

  getProduct(slug: string): Observable<Product> {
    return this.http.get(this.dataSource + slug, {
      headers: this.headers,
    }) as Observable<Product>;
  }
}
