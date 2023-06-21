import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  private slug!: string;
  private _product!: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.slug = params['productSlug'];
    });
    this.productsService.getProduct(this.slug).subscribe((product) => {
      this._product = product;
    });
    console.log(this._product);
  }

  get product() {
    return this._product;
  }
}
