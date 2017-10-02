
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar-left',
 templateUrl: './navbar-left.component.html',
 styleUrls: ['./navbar-left.component.css']
 
})
export class NavbarLeftComponent implements OnInit {

  constructor( private authService:AuthService,
    private router:Router) { }

  ngOnInit() {
  }


}



// templateUrl: './navbar-left.obican.html',
// styleUrls: ['./navbar-left.obican.css']