import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent {
  userForm = this.fb.group({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(private fb: FormBuilder) {}
  onSubmit() {
    alert(`Merci pour votre adhésion ! ${JSON.stringify(this.userForm.value)}`);
  }
}
