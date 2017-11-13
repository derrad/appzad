import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ZadrugarService } from './zadrugar.service';
import { ZadrugarModel } from './zadrugar-model';
import { routerTransition } from '../../animation/router.animations';
import { ResponeCustom } from './../../shared/models/ErrorRes';


@Component({
  selector: 'app-zadrugar',
  templateUrl: './zadrugar.component.html',
  styleUrls: ['./zadrugar.component.css'],
  animations: [routerTransition()]
})
export class ZadrugarComponent implements OnInit {

  Title: string;
  selectedZadrugar: ZadrugarModel;
  zadrL: Array<ZadrugarModel>;
  displayDetals = false;
  zadrShow: ZadrugarModel = new ZadrugarModel();

  constructor(private router: Router, private zadrService: ZadrugarService,
    private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService ) {
    this.Title = 'PREGLED ZADRUGARA';
  }

  ngOnInit() {

      this.zadrService.getZadrugari()
      .subscribe((profile) => {
      if (profile.success === true) {
        this.zadrL = profile.data;
      }
      // }
      },
      (error: ResponeCustom) => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000});
      //  console.log(error.message);
        this.zadrL = [];
        return false;
      }
      );

  }

  selectItem( work: ZadrugarModel) {
     this.displayDetals = true;
     this.zadrShow = this.cloneData(work);
  }
  cloneData(c: ZadrugarModel): ZadrugarModel {
    const work = new ZadrugarModel();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      work[prop] = c[prop];
    }
    return work;
   }

  addZadrugar() {
    this.router.navigate(['/zadrugar/new']);
  }
  updateZadrugar(id) {
    this.router.navigate(['/zadrugar/', id]);
  }


  deleteZadrugar(tzadrugar) {
    this.confirmationService.confirm({
        message: `Jeste li sigurni da želite uklonite izabrani podatak ? ` ,
        header: `${tzadrugar.Ime}  ${tzadrugar.Prezime}`,
          accept: () => {
            const index = this.zadrL.indexOf(tzadrugar);
           // console.log("index je " + index);
            this.zadrL.splice(index, 1);

            this.zadrService.delZadrugar(tzadrugar._id)
              .subscribe((pos) => {
                if (pos.success) {
                   this.flashMessage.show(pos.message , {
                      cssClass: 'alert-success',
                      timeout: 1000});
                }else {
                  this.router.navigate(['NotFound']);
                }
                } ,
                (error: ResponeCustom)  => {
                  this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 5000});
                  // Revert the view back to its original state
                  this.zadrL.splice(index, 0, tzadrugar);
                });
          }
        });
    }

}
