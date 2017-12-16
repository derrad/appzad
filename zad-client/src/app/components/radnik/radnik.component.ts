import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Radnik } from './radnik.model';
import { RadnikService } from './radnik.service';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ResponeCustom } from './../../shared/models/ErrorRes';


@Component({
  selector: 'app-radnik',
  templateUrl: './radnik.component.html',
  styleUrls: ['./radnik.component.css'],
  animations: [routerTransition()]
})
export class RadnikComponent implements OnInit {

  Title: string;
  selectedRadnik: Radnik;
  radnici: Array<Radnik>;
  displayDetals = false;
  radShow: Radnik = new Radnik();
  auto = 'auto';

  constructor(private router: Router, private radService: RadnikService,
    private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService) {
    this.Title = 'PREGLED RADNIKA';
  }

  ngOnInit() {
    this.radService.getRadnici().subscribe(profile => {
      if (profile.success === true) {
        this.radnici = profile.data;
      }
    },
      (error: ResponeCustom) => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000
        });
        this.radnici = [];
        return false;
      }
    );
  }

  selectRadnik(work: Radnik) {
    this.displayDetals = true;
    this.radShow = this.cloneData(work);
  }

  cloneData(c: Radnik): Radnik {
    const work = new Radnik();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      work[prop] = c[prop];
    }
    return work;
  }


  addRadnik() {
    this.router.navigate(['/radnik/new']);
  }
  updateRadnik(id) {
    this.router.navigate(['/radnik/', id]);
  }

  deleteRadnik(tradnik) {
    this.confirmationService.confirm({
      message: `Jeste li sigurni da želite uklonite izabranog radnika ?`,
      header: `${tradnik.Prezime} ${tradnik.Ime}`,
      accept: () => {
        const index = this.radnici.indexOf(tradnik);
        this.radnici.splice(index, 1);
        this.radService.delRadnik(tradnik._id)
          .subscribe((pos) => {
            if (pos.success) {
              this.flashMessage.show(pos.message, {
                cssClass: 'alert-success',
                timeout: 1000
              });
            } else {
              this.router.navigate(['NotFound']);
            }
          },
          (error: ResponeCustom) => {
            this.flashMessage.show(error.message, {
              cssClass: 'alert-danger',
              timeout: 5000
            });
            // Revert the view back to its original state
            this.radnici.splice(index, 0, tradnik);
          });
      }
    });
  }


}
