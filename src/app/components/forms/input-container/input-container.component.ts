import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input-container.component.html',
  styleUrls: ['./input-container.component.scss'],
})
export class InputContainerComponent {
  @Input() userForm!: FormGroup;
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() type!: string;
}
