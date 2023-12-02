import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { matchPassword } from './matchPassword.validator';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit{
  authForm!: FormGroup;
  isLoginMode = true;

  ngOnInit(): void {
    this.authForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^\S*$/)]),
      'repeatedPassword': new FormControl(null, [Validators.required])
    },
    {
      validators: matchPassword
    }
    );

    this.authForm.removeValidators(matchPassword);
    this.authForm.get('repeatedPassword')?.clearValidators();
    this.authForm.updateValueAndValidity();
  }

  switchAuthMode(){
    this.isLoginMode = !this.isLoginMode;
    if(this.isLoginMode){
      this.authForm.removeValidators(matchPassword);
      this.authForm.get('repeatedPassword')?.clearValidators();
      this.authForm.updateValueAndValidity();
    } else {
      this.authForm.addValidators(matchPassword);
      this.authForm.get('repeatedPassword')?.setValidators([Validators.required]);
      this.authForm.get('repeatedPassword')?.reset("");
      this.authForm.updateValueAndValidity();
    }
  }

  onSubmitForm(){
    if(this.isLoginMode){
      console.log('Logging In');
    } else {
      console.log("Signing Up");
    }
  }
}
