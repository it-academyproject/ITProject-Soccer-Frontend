import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  constructor() {}

  samePasswords(passwordName: string, confirmPasswordName: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[passwordName];
      const confirmPasswordControl = formGroup.controls[confirmPasswordName];

      if (passwordControl.value === confirmPasswordControl.value) {
        confirmPasswordControl.setErrors(null);
      } else {
        confirmPasswordControl.setErrors({ notTheSame: true });
      }
    };
  }
}
