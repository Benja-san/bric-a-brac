import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Token } from 'src/app/models/token';
import { TokenService } from 'src/app/services/token/token.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
})
export class UserLoginComponent {
  userForm = this.fb.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private tokenService: TokenService
  ) {}
  onSubmit() {
    this.usersService
      .login(
        this.userForm.value.email as string,
        this.userForm.value.password as string
      )
      .subscribe((rawToken) => {
        const token: Token = this.tokenService.decodeToken(rawToken);
        const username: string = token.username.replace('.', ' ');
        const expiresAt: Date = new Date(token.exp * 1000);
        console.log(token);
        localStorage.setItem('token', rawToken);
        localStorage.setItem('user', username);
        localStorage.setItem('roles', token.scope);
        localStorage.setItem('expires_at', expiresAt.toString());
        localStorage.setItem('email', token.sub);
      });
  }
}
