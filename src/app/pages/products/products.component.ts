import { Component } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  constructor(private productsService: ProductsService) {}
  private _products!: Product[];

  get products() {
    return this._products;
  }

  public handleOnSalesResearch() {
    this.productsService.getOnSalesProducts().subscribe((data) => {
      this._products = data;
    });
  }

  public handleAllProductsResearch() {
    this.productsService.getProducts().subscribe((data) => {
      this._products = data;
    });
  }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((data) => {
      this._products = data;
    });
  }
}
