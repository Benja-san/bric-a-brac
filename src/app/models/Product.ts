export class Product {
  static readonly VAT: number = 0.2;
  constructor(
    private _name: string,
    private _price: number,
    private _onSales: boolean = false
  ) {}

  get name() {
    return this._name;
  }

  get price() {
    return this._price;
  }

  get onSales() {
    return this._onSales;
  }

  set onSales(onSales: boolean) {
    this._onSales = onSales;
  }

  get priceWithVat() {
    return this._price * (1 + Product.VAT);
  }
}
