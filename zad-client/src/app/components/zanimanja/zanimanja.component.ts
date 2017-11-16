import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ZanimanjaModel } from './zanimanja.model';
import { ZanimanjaService } from './zanimanja.service';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import { DialogModule} from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ResponeCustom } from './../../shared/models/ErrorRes';

@Component({
  selector: 'app-zanimanja',
  templateUrl: './zanimanja.component.html',
  styleUrls: ['./zanimanja.component.css'],
  animations: [routerTransition()]
})
export class ZanimanjaComponent implements OnInit {

  Title: string;
  selectedZan: ZanimanjaModel;
  zanL: Array<ZanimanjaModel>;
  displayDetals = false;
  zanShow: ZanimanjaModel = new ZanimanjaModel();

  constructor(private router: Router, private zanService: ZanimanjaService,
              private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService ) {
    this.Title = 'PREGLED ZANIMANJA';
  }

  ngOnInit() {

    this.zanService.getZanimanja()
    .subscribe((profile) => {
      if (profile.success === true) {
        this.zanL = profile.data;
      }
      // }
      },
      (error: ResponeCustom) => {
        this.flashMessage.show(error.message, {
          cssClass: 'btn-danger',
          timeout: 9000});
      //  console.log(error.message);
        this.zanL = [];
        return false;
      }
      );

  }
 selectPosao( work: ZanimanjaModel) {
  // this.selectedOpstina=opstina;
   this.displayDetals = true;
   this.zanShow = this.cloneData(work);
}

cloneData(c: ZanimanjaModel): ZanimanjaModel {
  const work = new ZanimanjaModel();
  // tslint:disable-next-line:forin
  for (const prop in c) {
    work[prop] = c[prop];
  }
  return work;
 }


 addZnimanja() {
  this.router.navigate(['/zanimanja/new']);
 }
 updateZanimanja(id) {
  this.router.navigate(['/zanimanja/', id]);
 }

 deleteZanimanje(tzanim) {
    this.confirmationService.confirm({
        message: `Jeste li sigurni da žeite uklonite izabrano zanimanje ?   ` ,
        header: `${tzanim.Naziv}`,
        accept: () => {
          const index = this.zanL.indexOf(tzanim);
         // console.log("index je " + index);
          this.zanL.splice(index, 1);
          this.zanService.delZanimanje(tzanim._id)
          .subscribe((pos) => {
            // console.log(pos);
            if (pos.success) {
               this.flashMessage.show(pos.message , {
                  cssClass: 'btn-success',
                  timeout: 1000});
            }else {
              this.flashMessage.show(pos.message , {
                cssClass: 'btn-danger',
                timeout: 5000});
                this.zanL.splice(index, 0, tzanim);
              // this.router.navigate(['NotFound']);
            }
            } ,
            (error: ResponeCustom)  => {
              this.flashMessage.show(error.message, {
                cssClass: 'btn-danger',
                timeout: 5000});
              // Revert the view back to its original state
              this.zanL.splice(index, 0, tzanim);
            });
        }
      });
  }

}
