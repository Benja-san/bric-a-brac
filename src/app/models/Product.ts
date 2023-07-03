export class Product {
  static readonly VAT: number = 0.2;
  constructor(
    private _id: number,
    private _name: string,
    private _slug: string,
    private _description: string,
    private _price: number,
    private _onSales: boolean = false
  ) {}

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get slug() {
    return this._slug;
  }

  get description() {
    return this._description;
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
