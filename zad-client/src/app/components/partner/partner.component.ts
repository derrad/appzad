import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { FlashMessagesService } from 'angular2-flash-messages';
import { PartnerService } from './partner.service';
import { PartnerModel } from './partner-model';
import { routerTransition } from '../../animation/router.animations';
import { ResponeCustom } from './../../shared/models/ErrorRes';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css'],
  animations: [routerTransition()]
})
export class PartnerComponent implements OnInit {
  Title: string;
  selectedPartner: PartnerModel;
  partnerL: Array<PartnerModel>;
  displayDetals = false;
  partnerShow: PartnerModel = new PartnerModel();
  auto = 'auto';

  constructor(private router: Router, private partService: PartnerService,
    private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService) {
    this.Title = 'PREGLED KUPACA';
  }

  ngOnInit() {

    this.partService.getPartneri()
      .subscribe((profile) => {
        if (profile.success === true) {
          this.partnerL = profile.data;
        }
        // }
      },
      (error: ResponeCustom) => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000
        });
        //  console.log(error.message);
        this.partnerL = [];
        return false;
      }
      );

  }

  selectItem(work: PartnerModel) {
    this.displayDetals = true;
    this.partnerShow = this.cloneData(work);
  }
  cloneData(c: PartnerModel): PartnerModel {
    const work = new PartnerModel();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      work[prop] = c[prop];
    }
    return work;
  }

  addPartner() {
    this.router.navigate(['/partner/new']);
  }
  updatePartner(id) {
    this.router.navigate(['/partner/', id]);
  }


  deletePartner(tpartner) {
    this.confirmationService.confirm({
      message: `Jeste li sigurni da želite uklonite izabrani podatak ? `,
      header: `${tpartner.Naziv}`,
      accept: () => {
        const index = this.partnerL.indexOf(tpartner);
        // console.log("index je " + index);
        this.partnerL.splice(index, 1);

        this.partService.delPartner(tpartner._id)
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
            this.partnerL.splice(index, 0, tpartner);
          });
      }
    });
  }


}
