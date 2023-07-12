import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PasswordService } from '../../services/password.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './passwordForm.component.html',
  styleUrls: ['./passwordForm.component.scss']
})
export class PasswordFormComponent {
  passwordForm: FormGroup;
  colors: string[];
  strength: string;

  constructor(private formBuilder: FormBuilder, private passwordService: PasswordService) {
    this.passwordForm = this.formBuilder.group({
      password: ['']
    });
    this.colors = [];
    this.strength = "";
}
    

  onPasswordChange() {
    const password = this.passwordForm.get('password')?.value;
    const { colors, strength } = this.passwordService.checkPasswordComplexity(password);
    this.colors = colors;
    this.strength = strength;
  }
}