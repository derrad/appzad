import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
// import {Message} from 'primeng/components/common/api';
// import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String; 
  
  constructor(private authService:AuthService,private router:Router,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  onLoginSubmit(){
     const user = {
        username: this.username,
        password: this.password
      }

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('You are now logged in', {
          cssClass: 'alert-success',
          timeout: 5000});
        
          // this.msgs.push(
          //   {
          //       severity: 'info',
          //       summary: 'Info Message',
          //       detail: 'You are now logged in'
          //   });
        alert("Logovan sam");
        this.router.navigate(['dashboard']);
      } else {
        // this.messageService.add({severity:'error', summary:'Login error', detail:data.msg});
         this.flashMessage.show(data.msg, {
         cssClass: 'alert-danger',
          timeout: 5000});

        // this.msgs.push(
        //   {
        //       severity: 'error',
        //       summary: 'Error Message',
        //       detail: data.msg
        //   });

        this.router.navigate(['login']);
      }
    }); 
  }
}
