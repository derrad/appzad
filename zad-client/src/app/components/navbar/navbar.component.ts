import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
//import {GrowlModule,Message} from 'primeng/primeng';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [MessageService]
})
export class NavbarComponent implements OnInit {
  msgs: Message[] = [];

  constructor( private authService:AuthService,
    private router:Router ,private messageService: MessageService) { }

  ngOnInit() {
  }

  onLogoutClick(){
    this.authService.logout();
    this.messageService.add({severity:'error', summary:'Login info', detail:'You are logged out'});
    // this.flashMessage.show('You are logged out', {
    //   cssClass:'alert-success',
    //   timeout: 3000
    // });

    // this.msgs.push(
    //   {
    //       severity: 'info',
    //       summary: 'Info Message',
    //       detail: 'You are logged out'
    //   });

    this.router.navigate(['/login']);
    return false;
  } 

}
