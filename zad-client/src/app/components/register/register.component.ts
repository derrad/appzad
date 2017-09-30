import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/auth/validate.service'
import {AuthService} from '../../services/auth/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router'; 


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String
  //public msgs: Message[] = [];

  constructor(private validateService: ValidateService,
    private authService:AuthService,
    private router: Router ,
    private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){

    alert("Usao u onSubmit");

    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      // this.msgs.push(
      //   {
      //       severity: 'warn',
      //       summary: 'warn Message',
      //       detail: 'Please fill in all fields'
      //   });
      alert("Nisam prosao");
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
      // this.msgs.push(
      //   {
      //       severity: 'warn',
      //       summary: 'warn Message',
      //       detail: 'Please use a valid email'
      //   });

      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
        // this.msgs.push(
        //   {
        //       severity: 'info',
        //       summary: 'Info Message',
        //       detail: 'You are now registered and can log in'
        //   });

        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        // this.msgs.push(
        //   {
        //       severity: 'error',
        //       summary: 'Error Message',
        //       detail: 'Something went wrong'
        //   });

        this.router.navigate(['/register']);
      }
    });

  } 

}
