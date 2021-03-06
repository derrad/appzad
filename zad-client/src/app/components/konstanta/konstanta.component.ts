import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations';
import { FlashMessagesService } from 'angular2-flash-messages';
import { KonstantaService } from './konstanta.service';
import { KonstantaModel } from './konstanta-model';
import { ResponeCustom } from './../../shared/models/ErrorRes';

@Component({
  selector: 'app-konstanta',
  templateUrl: './konstanta.component.html',
  styleUrls: ['./konstanta.component.css'],
  animations: [routerTransition()]
})
export class KonstantaComponent implements OnInit {
  Title: string;
  selectedKonst: KonstantaModel;
  konstL: Array<KonstantaModel>;
  displayDetals = false;
  konstShow: KonstantaModel = new KonstantaModel();
  auto = 'auto';
  constructor(private router: Router, private konstService: KonstantaService,
    private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService) {
    this.Title = 'PREGLED KONSTANTE';
  }

  ngOnInit() {

    this.konstService.getKonstante()
      .subscribe((profile) => {
        if (profile.success === true) {
          this.konstL = profile.data;
        }
      },
      (error: ResponeCustom) => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000
        });
        this.konstL = [];

        return false;
      }
      );
  }


  selectItem(work: KonstantaModel) {
    this.displayDetals = true;
    this.konstShow = this.cloneData(work);
  }

  cloneData(c: KonstantaModel): KonstantaModel {
    const work = new KonstantaModel();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      work[prop] = c[prop];
    }
    return work;
  }
  addKonst() {
    this.router.navigate(['/konstanta/new']);
  }
  updateKonst(id) {
    this.router.navigate(['/konstanta/', id]);
  }
  deleteKonst(tkonst) {
    this.confirmationService.confirm({
      message: `Jeste li sigurni da želite uklonite izabrani podatak ? `,
      header: `KONSTANTA`,
      accept: () => {
        const index = this.konstL.indexOf(tkonst);
        this.konstL.splice(index, 1);
        this.konstService.delKonstanta(tkonst._id)
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
            this.konstL.splice(index, 0, tkonst);
          });
      }
    });
  }


}
