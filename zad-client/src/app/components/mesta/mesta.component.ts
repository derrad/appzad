import { Component, OnInit } from '@angular/core';
import { MestaService } from './mesta.service';
import { Router } from '@angular/router';
import { Mesta } from './mesta.model';
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
  selector: 'app-mesta',
  templateUrl: './mesta.component.html',
  styleUrls: ['./mesta.component.css'],
  animations: [routerTransition()]
})
export class MestaComponent implements OnInit {
  Title: string;
  selectedMesto: Mesta;
  loading: boolean;
  mestaL: Array<Mesta>;
  displayDetals = false;
  mesShow: Mesta = new Mesta();
  auto = 'auto';
  brojmesta = 0;
  constructor(private router: Router, private mestaService: MestaService,
    private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService) {
    this.Title = 'PREGLED MESTA';

  }

  ngOnInit() {
    this.mestaService.getMesta().subscribe(profile => {
      console.log(' zovem getmesta -  ' + JSON.stringify(profile) );
      if (profile.success === true) {
        this.mestaL = profile.data;
        this.brojmesta = this.mestaL.length;
      } else {
        this.flashMessage.show(profile.message, {
          cssClass: 'alert-danger',
          timeout: 9000
        });
        this.router.navigate(['NotFound']);
      }
    },
      (error: ResponeCustom) => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000
        });
        this.mestaL = [];
        return false;
      }
    );
  }

  selectMesto(mesto: Mesta) {
    this.displayDetals = true;
    this.mesShow = this.cloneData(mesto);
  }

  cloneData(c: Mesta): Mesta {
    const mesto = new Mesta();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      mesto[prop] = c[prop];
    }
    return mesto;
  }

  addMesta() {
    this.router.navigate(['/mesta/new']);
  }

  updateMesta(id) {
    this.router.navigate(['/mesta/', id]);
  }

  deleteMesto(tmesto) {
    this.confirmationService.confirm({
      message: `Jeste li sigurni da želite uklonite izabrano mesto ?`,
      header: `${tmesto.Naziv}`,
      accept: () => {
        // Actual logic to perform a confirmation
        const index = this.mestaL.indexOf(tmesto);
        this.mestaL.splice(index, 1);
        this.mestaService.delMesto(tmesto._id)
          .subscribe((pos) => {
            if (pos.success) {
              this.flashMessage.show(pos.message, {
                cssClass: 'alert-success',
                timeout: 1000
              });
            } else {
              this.flashMessage.show(pos.message, {
                cssClass: 'btn-danger',
                timeout: 5000
              });
              this.mestaL.splice(index, 0, tmesto);
            }
          },
          (error: ResponeCustom) => {
            this.flashMessage.show(error.message, {
              cssClass: 'alert-danger',
              timeout: 5000
            });
            // Revert the view back to its original state
            this.mestaL.splice(index, 0, tmesto);
          });
      }
    });
  }



}
