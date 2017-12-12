import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../animation/router.animations';
import { DashboardService } from './dashboard.service';
import { ResponeCustom } from './../../shared/models/ErrorRes';

class AggCount {
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
  CposaoAll = 0;
  CposaoActiv = 0;
  CkupacAll = 0;
  CkupacActiv = 0;
  CkupacUput = 0;
  CzadrAll = 0;
  CzadrActiv = 0;
  CUpuAll = 0;
  CUputFakt = 0;
  CUputStorn = 0;
  constructor(private dashService: DashboardService, private router: Router) {


  }

  ngOnInit() {

    this.dashService.getPosaoCount().subscribe(profile => {
      if (profile.success === true) {
        this.CposaoAll = profile.number;
      }
    },
      (error: ResponeCustom) => {
        // console.log(err);
        this.CposaoAll = 0;
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });

    this.dashService.getActivPosaoCount().subscribe(profile => {
      if (profile.success === true) {
        // console.log('Aktivnih poSlova  ' +  JSON.stringify(profile.data).length);
        this.cPrimamAgr = profile.data;
        this.CposaoActiv = this.cPrimamAgr.length;
      } else {
        this.CposaoActiv = [].length;
      }
    },
      (error: ResponeCustom) => {
        // console.log(err);
        this.CposaoActiv = [].length;
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });

    this.dashService.getKupciCount().subscribe(profile => {
      if (profile.success === true) {
        this.CkupacAll = profile.number;
      }
    },
      (error: ResponeCustom) => {
        // console.log(err);
        this.CkupacAll = 0;
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });

    this.dashService.getActivKupciCount().subscribe(profile => {
      if (profile.success === true) {
        this.CkupacActiv = profile.number;
      } else {
        this.CkupacActiv = 0;
      }
    },
      (error: ResponeCustom) => {
        // console.log(err);
        this.CkupacActiv = 0;
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });

    this.dashService.getUputKupciCount().subscribe(profile => {
      if (profile.success === true) {
        // console.log('Aktivnih poSlova  ' +  JSON.stringify(profile.data).length);
        this.cPrimamAgr = profile.data;
        this.CkupacUput = this.cPrimamAgr.length;
      } else {
        this.CkupacUput = [].length;
      }
    },
      (error: ResponeCustom) => {
        // console.log(err);
        this.CkupacUput = [].length;
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });


    this.dashService.getKupciCount().subscribe(profile => {
      if (profile.success === true) {
        this.CkupacAll = profile.number;
      }
    },
      (error: ResponeCustom) => {
        // console.log(err);
        this.CkupacAll = 0;
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });


    this.dashService.getZadrugariCount().subscribe(profile => {
      if (profile.success === true) {
        this.CzadrAll = profile.number;
      }
    },
      (error: ResponeCustom) => {
        // console.log(err);
        this.CzadrAll = 0;
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });

    this.dashService.getActivZadCount().subscribe(profile => {
      if (profile.success === true) {
        this.CzadrActiv = profile.number;
      }
    },
      (error: ResponeCustom) => {
        // console.log(err);
        this.CzadrActiv = 0;
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });


    this.UputiCount();

  }


  private UputiCount() {

    this.dashService.getUputCountAll().subscribe(profile => {
      if (profile.success === true) {
        this.CUpuAll = profile.number;
      }
    },
      (error: ResponeCustom) => {
        // console.log(err);
        this.CUpuAll = 0;
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });

    this.dashService.getUputCountFakt().subscribe(profile => {
      if (profile.success === true) {
        this.CUputFakt = profile.number;
      }
    },
      (error: ResponeCustom) => {
        // console.log(err);
        this.CUputFakt = 0;
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });

    this.dashService.getUputCountStorn().subscribe(profile => {
      if (profile.success === true) {
        this.CUputStorn = profile.number;
      }
    },
      (error: ResponeCustom) => {
        // console.log(err);
        this.CUputStorn = 0;
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });


  }

}
