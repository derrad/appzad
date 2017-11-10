import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
// import {SidebarModule} from 'primeng/primeng';

@Component({
 selector: 'app-navbar-left',
 templateUrl: './navbar-left.component.html',
 styleUrls: ['./navbar-left.component.css']
})
export class NavbarLeftComponent implements OnInit {

  visibleSidebar1 = false;
  @Output() closeSB: EventEmitter<any> = new EventEmitter();

  constructor( private authService: AuthService,
    private router: Router) {
      }

  ngOnInit() {
  }

  OnClickMenu() {
  //  console.log('on click menu i emitujem ;');
    this.visibleSidebar1 = false;
    this.closeSB.emit(this.visibleSidebar1);
  }

}
