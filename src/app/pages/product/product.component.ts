import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { PRODUCTS } from 'src/data/PRODUCTS';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  private keyID!: string;
  private _product!: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.keyID = params['productkey'];
    });
    this._product = PRODUCTS[parseInt(this.keyID) - 1];
  }

  get product() {
    return this._product;
  }
}
