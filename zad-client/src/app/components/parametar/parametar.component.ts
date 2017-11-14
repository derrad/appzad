import { Component, OnInit } from '@angular/core';
import { ParametarService } from './parametar.service';
import { Router } from '@angular/router';
import { Parametar } from './parametar.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations';
import { ResponeCustom } from './../../shared/models/ErrorRes';
// import * as $ from 'jquery';


@Component({
  selector: 'app-parametar',
  templateUrl: './parametar.component.html',
  styleUrls: ['./parametar.component.css'],
  animations: [routerTransition()]
})
export class ParametarComponent implements OnInit {
  params: Array<Parametar>;
  Title: string;
  selectedParam: Parametar;
  displayDetals = false;
  parShow: Parametar = new Parametar();
  constructor(private paramService: ParametarService, private router: Router,
    private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService ) {
    this.Title = 'PREGLED PARAMETARA';
   }

ngOnInit() {
  this.paramService.getParametars()
      .subscribe((profile) => {
      if (profile.success === true) {
        this.params = profile.data;
       } else {
          this.flashMessage.show(profile.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
          this.router.navigate(['NotFound']);
       }
      },
     (error: ResponeCustom) => {
      this.flashMessage.show(error.message, {
       cssClass: 'alert-danger',
       timeout: 9000});
       this.params = [];
       return false;
    }
  );
}
AddParam() {
    this.router.navigate(['parametar/new']);
}
updateParam(id) {
   this.router.navigate(['parametar/', id]);
}
deleteParam(tparam) {
   this.confirmationService.confirm({
    message: `Jeste li sigurni da želite uklonite izabrani podatak ?` ,
    header: `${tparam.Naziv}`,
      accept: () => {
        const index = this.params.indexOf(tparam);
        this.params.splice(index, 1);
        this.paramService.delParametar(tparam._id)
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
               this.params.splice(index, 0, tparam);
            });
      }
    });
}

 selectParam( tprm: Parametar) {
  this.displayDetals = true;
  this.parShow = this.cloneData(tprm);
 }

 cloneData(c: Parametar): Parametar {
  const prmdata = new Parametar();
  // tslint:disable-next-line:forin
  for (const prop in c) {
    prmdata[prop] = c[prop];
  }
  return prmdata;
}

}
