export class Token {
  constructor(
    private _exp: number,
    private _iat: number,
    private _iss: string,
    private _scope: string,
    private _sub: string,
    private _username: string
  ) {}

  get exp() {
    return this._exp;
  }

  get iat() {
    return this._iat;
  }

  get iss() {
    return this._iss;
  }

  get scope() {
    return this._scope;
  }

  get sub() {
    return this._sub;
  }

  get username() {
    return this._username;
  }
}
