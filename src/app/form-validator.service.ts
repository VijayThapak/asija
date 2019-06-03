import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidatorService {

  constructor() { }

  myValidator(value): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean } | null => {
      if (control.value.length < value) {
        return {'invalid-name': true }
      }
      return null;
    }
  }
}
