import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animation/router.animations' 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  
  ngOnInit() {
  }

}
