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
import { FondSatiService } from './fond-sati.service';
import { FondSati } from './fondsati.model';
import { ResponeCustom } from './../../shared/models/ErrorRes';


@Component({
  selector: 'app-fond-sati',
  templateUrl: './fond-sati.component.html',
  styleUrls: ['./fond-sati.component.css'],
  animations: [routerTransition()]
})
export class FondSatiComponent implements OnInit {
  Title: string;
  selectedFnSati: FondSati;
  fnsati: Array<FondSati>;
  displayDetals = false;
  fsatiShow: FondSati = new FondSati();
  auto = 'auto';
  brojslogova = 0;

  constructor(private router: Router, private fnsatiService: FondSatiService,
    private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService) {
    this.Title = 'PREGLED FONDA SATI';
  }


  ngOnInit() {
    this.fnsatiService.getFondSate()
      .subscribe((profile) => {
        if (profile.success === true) {
          this.fnsati = profile.data;
          this.brojslogova = this.fnsati.length ;
        }
      },
      (error: ResponeCustom) => {

        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000
        });
        console.log(error.message);
        this.fnsati = [];
        if (error.status === 404) {
          this.router.navigate(['NotFound']);
        }
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      }
      );

  }



  selectItem(work: FondSati) {
    this.displayDetals = true;
    this.fsatiShow = this.cloneData(work);
  }

  cloneData(c: FondSati): FondSati {
    const work = new FondSati();
    // tslint:disable-next-line:forin
    for (const prop in c) {
      work[prop] = c[prop];
    }
    return work;
  }

  addFSati() {
    this.router.navigate(['/fondsati/new']);
  }

  updateFSati(id) {
    this.router.navigate(['/fondsati/', id]);
  }

  deleteFSati(tfnsati) {
    this.confirmationService.confirm({
      message: `Jeste li sigurni da želite uklonite izabrani podatak ?   `,
      header: `${tfnsati.Godina} - ${tfnsati.Mesec}`,
      accept: () => {
        const index = this.fnsati.indexOf(tfnsati);
        this.fnsati.splice(index, 1);
        this.fnsatiService.delFondSati(tfnsati._id)
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
            this.fnsati.splice(index, 0, tfnsati);
            if (error.status === 404) {
              this.router.navigate(['NotFound']);
            }
            if (error.status === 401) {
              this.router.navigate(['login']);
            }
          });
      }
    });
  }

}
