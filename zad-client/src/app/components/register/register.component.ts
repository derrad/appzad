import { UserModel } from './user.model';
import {Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ValidateService} from '../../services/auth/validate.service'
import {AuthService} from '../../services/auth/auth.service'
import {FlashMessagesService} from 'angular2-flash-messages';
import { Router } from '@angular/router';
import {Location} from '@angular/common';




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
  formReg: FormGroup;
  userN: UserModel = new UserModel();


  constructor(private validateService: ValidateService,
    private authService:AuthService,
    private router: Router ,
    private flashMessage:FlashMessagesService,
    formBuilder: FormBuilder ,private _location: Location) {


      this.formReg = formBuilder.group({
        _id:[],
        name:['',[Validators.required]],
        email: ['', [
          Validators.required
        ]],
        username: ['', [
          Validators.required
        ]],
        password:[],
        Opis: []
      });


     }

  ngOnInit() {
  
  }

  onRegisterSubmit(){

    //alert("Usao u onSubmit");
    const user = this.formReg.value;

    // const user = {
    //   name: this.name,
    //   email: this.email,
    //   username: this.username,
    //   password: this.password
    // }

    // Required Fields
    if(!this.validateService.validateRegister(user)){
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)){
      this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
       return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success){
        this.flashMessage.show('You are now registered and can log in', {cssClass: 'alert-success', timeout: 3000});
         this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });

  } 

  backClicked(event: any) {
    this._location.back();
    //event.stopPropagation();
    
  }

}
