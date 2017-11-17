import { Component, OnInit } from '@angular/core';
import {DrzaveService} from './drzave.service';
import {Router} from '@angular/router';
import {IDrzave, Drzave} from './drzave.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import {ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations';
import { ResponeCustom} from './../../shared/models/ErrorRes';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.css'],
  animations: [routerTransition()]
})
export class DrzaveComponent implements OnInit {
  drzave: Array<IDrzave>;
  Title: string;
  selectedDrzave: Drzave;
  displayDetals = false;
  drzShow: Drzave = new Drzave();
  constructor(private drzaveService: DrzaveService, private router: Router,
              private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService) {
    this.Title = 'PREGLED DRŽAVA';
   }

  ngOnInit() {
    this.drzaveService.getDrzave()
    .subscribe((profile) => {
    if (profile.success === true) {
      this.drzave = profile.data;
    }
    },
    (error: ResponeCustom) => {
    this.flashMessage.show(error.message, {
      cssClass: 'alert-danger',
      timeout: 9000});
      this.drzave = [];
      return false;
    }
    );
  }


selectDrzavu( tdrz: Drzave) {
   this.displayDetals = true;
   this.drzShow = this.cloneData(tdrz);
}


cloneData(c: Drzave): Drzave {
  const drzava = new Drzave();
  // tslint:disable-next-line:forin
  for (const prop in c) {
    drzava[prop] = c[prop];
  }
  return drzava;
}

addDrzave() {
  this.router.navigate(['drzave/new']);
}

updateDrzavu(id) {
  this.router.navigate(['drzave/', id]);
}


deleteDrzavu(tdrzava) {
  // console.log(tdrzava);
  this.confirmationService.confirm({
    message: `Jeste li sigurni da želite uklonite izabrani podatak ? ` ,
    header: `${tdrzava.Naziv}`,
      accept: () => {
        const index = this.drzave.indexOf(tdrzava);
        this.drzave.splice(index, 1);
        this.drzaveService.delDrzava(tdrzava._id)
          .subscribe((pos) => {
            if (pos.success) {
               this.flashMessage.show(pos.message , {
                  cssClass: 'alert-success',
                  timeout: 1000});
            }else {
              // this.router.navigate(['NotFound']);
              this.flashMessage.show(pos.message , {
                cssClass: 'btn-danger',
                timeout: 5000});
                this.drzave.splice(index, 0, tdrzava);
            }
            } ,
            (error: ResponeCustom)  => {
              this.flashMessage.show(error.message, {
                cssClass: 'alert-danger',
                timeout: 5000});
              // Revert the view back to its original state
              this.drzave.splice(index, 0, tdrzava);
            });
      }
    });
}

}







