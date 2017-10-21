import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth/auth.service';

@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService, private router:Router){
  }

 
  

  canActivate(){
    if(this.authService.loggedIn()){
     // console.log("ovo je email" + this.user.email);
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
} 