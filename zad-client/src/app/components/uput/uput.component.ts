import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header, Footer } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UputService } from './uput.service';
import { UputModel } from './uput.model';
import { routerTransition } from '../../animation/router.animations';
import { ResponeCustom } from './../../shared/models/ErrorRes';


@Component({
  selector: 'app-uput',
  templateUrl: './uput.component.html',
  styleUrls: ['./uput.component.css'],
  animations: [routerTransition()]
})
export class UputComponent implements OnInit {
  Title: string;
  selectedUput: UputModel;
  uputL: Array<UputModel>;
  displayDetals = false;
  uputShow: UputModel = new UputModel();
  pickHeight = (window.innerHeight) * 0.8;
  pickWidth = (window.innerWidth) * 0.8;

  constructor(private router: Router, private uputService: UputService,
    private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService ) {
    this.Title = 'PREGLED UPUTA';
  }

  ngOnInit() {
    this.uputService.getUputi()
    .subscribe((profile) => {
    if (profile.success === true) {
      this.uputL = profile.data;
    }
    // }
    },
    (error: ResponeCustom) => {
      this.flashMessage.show(error.message, {
        cssClass: 'alert-danger',
        timeout: 9000});
        this.uputL = [];
        return false;
    }
    );
  }


selectItem( work: UputModel) {
  this.displayDetals = true;
  this.uputShow = this.cloneData(work);
}

cloneData(c: UputModel): UputModel {
  const uput = new UputModel();
  // tslint:disable-next-line:forin
  for ( const prop in c) {
    uput[prop] = c[prop];
  }
  return uput;
}
addUput() {
   this.router.navigate(['/uput/new']);
 }
 updateUput(id) {
   this.router.navigate(['/uput/', id]);
 }

 deleteUput(tUput) {
  this.confirmationService.confirm({
      message: `Jeste li sigurni da želite uklonite izabrani podatak ? ` ,
      header: `${tUput.Broj} / ${tUput.Godina}`,
        accept: () => {
          const index = this.uputL.indexOf(tUput);
         // console.log("index je " + index);
          this.uputL.splice(index, 1);

          this.uputService.delUput(tUput._id)
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
                this.uputL.splice(index, 0, tUput);
              });
        }
      });
  }


}
