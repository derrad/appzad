import { Injectable } from '@angular/core';
import { Validators,FormControl } from '@angular/forms';

@Injectable()
export class ServiceValidateShared {

  constructor() { }

//   validateRegister(user){
//     if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined){
//       return false;
//     } else {
//       return true;
//     }
//   }

//ovo popravi
  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  } 

//   validateGlavni(user){
//     console.log("user name je " + user.username);
//     if(user.name == undefined ){
//       return false;
//     } else {
//       if(user.username == 'derrad' ){
//           return true;
//       }
//       return false;
//     }
//   }


  validateRegExpSifru(c: FormControl) {
    let SIFRA_REGEXP = new RegExp('^[a-z0-9_-]+$', 'i');
  
    return SIFRA_REGEXP.test(c.value) ? null : {
      validateSifru: {
        valid: false
      }
    };
  }

}