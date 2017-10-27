import { Injectable } from '@angular/core';
import { Validators,FormControl ,ValidatorFn, AbstractControl } from '@angular/forms';

@Injectable()
export class ServiceValidateShared {

constructor() { }


maxValue(max: Number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const input = control.value,
          isValid = input > max;
    if(isValid) 
        return { 'maxValue': {max} }
    else 
        return null;
  };
}

minValue(min: Number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const input = control.value,
          isValid = input < min;
    if(isValid) 
        return { 'minValue': {min} }
    else 
        return null;
  };
}

validateRegExpSifru(c: FormControl) {
    let SIFRA_REGEXP = new RegExp('^[a-z0-9_-]+$', 'i');
  
    return SIFRA_REGEXP.test(c.value) ? null : {
      validateSifru: {
        valid: false
      }
    };
}

}

