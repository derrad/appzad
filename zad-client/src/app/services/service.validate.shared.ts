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


validateOnlyNumbers(evt) {
  const theEvent = evt || window.event;
  let key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  const regex = /[0-9]|\./;
  const TABKEY = 9;
  if(theEvent.keyCode == TABKEY) {
    //console.log("Uhvatio tab");
   // if(theEvent.preventDefault) theEvent.preventDefault();
    return true;
  }
  const BACKSPACE = 8;
  if(theEvent.keyCode == BACKSPACE) {
    return true;
  }
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}



validateOnlyDigit(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  var regex = /[0-9]/; // [^0-9] 
  const TABKEY = 9;
  if(theEvent.keyCode == TABKEY) {
   // console.log("Uhvatio tab");
   // if(theEvent.preventDefault) theEvent.preventDefault();
    return true;
  }
  const BACKSPACE = 8;
  if(theEvent.keyCode == BACKSPACE) {
    return true;
  }
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}

}

