import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  let password = control.get('password');
  let repeatedPassoword = control.get('repeatedPassword');

  if( password && repeatedPassoword && password?.value !== repeatedPassoword?.value) {
    return {passwordMatchError: true}
  }

  return null;
}
