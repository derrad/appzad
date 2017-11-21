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
  CkupacActiv: number;
  CzadrAll: number;
  CUpuAll: number;
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

      this.dashService.getActivKupciCount().subscribe(profile => {
        if (profile.success === true) {
          this.CkupacActiv = profile.number;
        }
      },
      err => {
        console.log(err);
        this.CkupacActiv = 0;
        return false;
      });

      this.dashService.getZadrugaiCount().subscribe(profile => {
        if (profile.success === true) {
          this.CzadrAll = profile.number;
        }
      },
      err => {
        console.log(err);
        this.CzadrAll = 0;
        return false;
      });

      this.dashService.getUputCountAll().subscribe(profile => {
        if (profile.success === true) {
          this.CUpuAll = profile.number;
        }
      },
      err => {
        console.log(err);
        this.CUpuAll = 0;
        return false;
      });

  }

}
