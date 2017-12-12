import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import { DialogModule} from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations';
import { FlashMessagesService } from 'angular2-flash-messages';
import { BankeService } from './banke.service';
import { BankeModel } from './banke-model';
import { ResponeCustom} from './../../shared/models/ErrorRes';


@Component({
  selector: 'app-banke',
  templateUrl: './banke.component.html',
  styleUrls: ['./banke.component.css'],
  animations: [routerTransition()]
})
export class BankeComponent implements OnInit {
  Title: string;
  selectedBank: BankeModel;
  bankeL: Array<BankeModel>;
  displayDetals = false;
  bankaShow: BankeModel = new BankeModel();
  auto = 'auto';

  constructor(private router: Router, private bankService: BankeService,
    private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService ) {
    this.Title = 'PREGLED BANAKA';
}

  ngOnInit() {

    this.bankService.getBanke()
      .subscribe((profile) => {
      if (profile.success === true) {
       // console.log(JSON.stringify(profile.data));
          this.bankeL = profile.data;
      }
    // }
      },
      (error: ResponeCustom) => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000});
          this.bankeL = [];

        return false;
      }
);
}


selectItem( work: BankeModel) {
   this.displayDetals = true;
   this.bankaShow = this.cloneData(work);
}

cloneData(c: BankeModel): BankeModel {
  const work = new BankeModel();
  // tslint:disable-next-line:forin
  for (const prop in c) {
    work[prop] = c[prop];
  }
  return work;
 }
 addBanke() {
  this.router.navigate(['/banke/new']);
 }
 updateBanke(id) {
  this.router.navigate(['/banke/', id]);
 }
 deleteBank(tbanka) {
    this.confirmationService.confirm({
      message: `Jeste li sigurni da želite uklonite izabrani podatak ? ` ,
      header: `${tbanka.Naziv}`,
        accept: () => {
          const index = this.bankeL.indexOf(tbanka);
          this.bankeL.splice(index, 1);
          this.bankService.delBanka(tbanka._id)
            .subscribe((pos) => {
              if (pos.success) {
                 this.flashMessage.show(pos.message , {
                    cssClass: 'alert-success',
                    timeout: 1000});
              }else {
             //   this.router.navigate(['NotFound']);
                this.flashMessage.show(pos.message , {
                  cssClass: 'btn-danger',
                  timeout: 5000});
                  this.bankeL.splice(index, 0, tbanka);
              }
              } ,
              (error: ResponeCustom)  => {
                this.flashMessage.show(error.message, {
                  cssClass: 'alert-danger',
                  timeout: 5000});
                this.bankeL.splice(index, 0, tbanka);
              });
        }
    });
  }
}

