import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { PRODUCTS } from 'src/data/PRODUCTS';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor() {}
  private _products: Product[] = PRODUCTS;

  get products() {
    return this._products;
  }
}
