import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
//import {GrowlModule,Message} from 'primeng/primeng';
// import {Message} from 'primeng/components/common/api';
// import {MessageService} from 'primeng/components/common/messageservic

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  constructor( private authService:AuthService,
    private router:Router ,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
       cssClass:'alert-success',
       timeout: 3000
     });

    // this.msgs.push(
    //   {
    //       severity: 'info',
    //       summary: 'Info Message',
    //       detail: 'You are logged out'
    //   });

    this.router.navigate(['/login']);
    return false;
  } 

  onClickHelp(){
  // alert("Provera help-a");
    this.flashMessage.show('Trebalo bi help da prikazemo', {
      cssClass:'alert-success',
      timeout: 3000
    });
    // this.messageService.add({severity:'info', summary:'Help info', detail:'Trebalo bi help da prikazemo'});
    return false;
  }


}
