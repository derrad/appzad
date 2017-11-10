import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animation/router.animations';
import { DashboardService } from './dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  CposaoAll: number;
  CkupacAll: number;
  constructor(private dashService: DashboardService ) { }

  ngOnInit() {

      this.dashService.getPosaoCount().subscribe(profile => {
        if (profile.success === true) {
          this.CposaoAll = profile.number;
        }
      },
      err => {
        console.log(err);
        this.CposaoAll = 0;
        return false;
      });

      this.dashService.getKupciCount().subscribe(profile => {
        if (profile.success === true) {
          this.CkupacAll = profile.number;
        }
      },
      err => {
        console.log(err);
        this.CkupacAll = 0;
        return false;
      });


  }

}
