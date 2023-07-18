import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Token } from 'src/app/models/token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  decodeToken(token: string): Token {
    return jwt_decode(token);
  }
}
