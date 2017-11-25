import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../animation/router.animations';
import { DashboardService } from './dashboard.service';

class AggCount  {
  _id: string;
  total: Number;
}
// Prvo ovo prouci pa napravi ovu komponentu
// https://www.metaltoad.com/blog/angular-2-http-observables-and-concurrent-data-loading

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  cPrimamAgr: Array<AggCount>;
  CposaoAll: number;
  CposaoActiv: number;
  CkupacAll: number;
  CkupacActiv: number;
  CkupacUput: number;
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

      this.dashService.getActivPosaoCount().subscribe(profile => {
        if (profile.success === true) {
         // console.log('Aktivnih poSlova  ' +  JSON.stringify(profile.data).length);
          this.cPrimamAgr = profile.data;
          this.CposaoActiv = this.cPrimamAgr.length;
        }else {
          this.CposaoActiv = [].length;
        }
      },
      err => {
        console.log(err);
        this.CposaoActiv = [].length;
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
        }else {
          this.CkupacActiv = 0;
        }
      },
      err => {
        console.log(err);
        this.CkupacActiv = 0;
        return false;
      });

      this.dashService.getUputKupciCount().subscribe(profile => {
        if (profile.success === true) {
         // console.log('Aktivnih poSlova  ' +  JSON.stringify(profile.data).length);
          this.cPrimamAgr = profile.data;
          this.CkupacUput = this.cPrimamAgr.length;
        }else {
          this.CkupacUput = [].length;
        }
      },
      err => {
        console.log(err);
        this.CkupacUput = [].length;
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
