import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {AuthService} from '../../services/auth/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    pushRightClass: string = 'push-right';
    
    constructor( public router: Router,private authService:AuthService,private flashMessage:FlashMessagesService) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {}

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    onLogoutClick(){
        this.authService.logout();
        this.flashMessage.show('You are logged out', {
           cssClass:'alert-success',
           timeout: 3000
         });
    
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
    
      onClickQuickMenu(){
        // alert("Provera help-a");
          this.flashMessage.show('Trebalo quick menu da prikazemo', {
            cssClass:'alert-success',
            timeout: 3000
          });
          // this.messageService.add({severity:'info', summary:'Help info', detail:'Trebalo bi help da prikazemo'});
          return false;
        }

 
}
