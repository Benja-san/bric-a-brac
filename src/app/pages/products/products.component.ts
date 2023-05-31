import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  private _products: Product[] = [
    new Product('I phone 14', 1600),
    new Product('redMi', 300),
    new Product('Pixel Pro 7', 900),
    new Product('Samsung Fold', 1200),
    new Product('Playstation 5', 500),
    new Product('Switch Oled', 350),
  ];

  get products() {
    return this._products;
  }
}
