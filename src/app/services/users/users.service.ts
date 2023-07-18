import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private dataSource: string = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(
      `${this.dataSource}auth/login`,
      {
        email,
        password,
      },
      { responseType: 'text' }
    );
  }
}
