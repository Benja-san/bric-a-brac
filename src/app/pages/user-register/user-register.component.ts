import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
})
export class UserRegisterComponent {
  userForm = this.fb.group({});
  constructor(private fb: FormBuilder) {}
  onSubmit() {
    alert(`Merci pour votre adhésion ! ${JSON.stringify(this.userForm.value)}`);
  }
}
