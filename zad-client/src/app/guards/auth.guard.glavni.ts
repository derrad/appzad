import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';
import {ValidateService} from '../services/auth/validate.service'

@Injectable()
export class AuthGuardGlavni implements CanActivate{
  user: Object;
  constructor(private authService:AuthService, private router:Router, private valser:ValidateService){
  }

  loadToken(){
    this.user = JSON.parse(localStorage.getItem('user'));
   
  }

  canActivate(){
    if(this.authService.loggedIn()){
      this.loadToken();
      if(this.valser.validateGlavni(this.user)){
        return true;
      } else{
        this.router.navigate(['/login']);
      }     
     // console.log("ovo je email" + this.user.email);
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }


  // canActivate(){
  //   if(this.authService.loggedIn()){
  //    // console.log("ovo je email" + this.user.email);
  //     return true;
  //   } else {
  //     this.router.navigate(['/login']);
  //     return false;
  //   }
  // }
} 