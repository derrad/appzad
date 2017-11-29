import { Component, OnInit } from '@angular/core';
import { OpstineService } from './opstine.service';
import {Router} from '@angular/router';
import {Opstine} from './opstine.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import {ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ResponeCustom } from './../../shared/models/ErrorRes';
@Component({
  selector: 'app-opstine',
  templateUrl: './opstine.component.html',
  styleUrls: ['./opstine.component.css']
})
export class OpstineComponent implements OnInit {
  Title: string;
  selectedOpstina: Opstine;
  opstineL: Array<Opstine>;
  displayDetals = false;
  opstShow: Opstine = new Opstine();


  constructor(private router: Router, private opstService: OpstineService,
              private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService) {
    this.Title = 'PREGLED OPŠTINA';

  }

  ngOnInit() {
    this.opstService.getOpstine().subscribe(profile => {
        if (profile.success === true) {
            this.opstineL = profile.data;
        }else {
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
          this.opstineL = [];
          if (error.status === 404 ) {
            this.router.navigate(['NotFound']);
          }
          if (error.status === 401) {
             this.router.navigate(['login']);
          }
        return false;
      }
    );
  }

selectOpstina( opstina: Opstine) {
    this.displayDetals = true;
    this.opstShow = this.cloneData(opstina);
}

cloneData(c: Opstine): Opstine {
  const opstina = new Opstine();
  // tslint:disable-next-line:forin
  for ( const prop in c) {
    opstina[prop] = c[prop];
  }
  return opstina;
}

addOpstine() {
  this.router.navigate(['opstine/new']);
}

updateOpstinu(id) {
  this.router.navigate(['opstine/', id]);
}

deleteOpstinu(tOpstine) {
    this.confirmationService.confirm({
        message: `Jeste li sigurni da želite uklonite izabranu opštinu ?   ` ,
        header: `${tOpstine.Naziv}`,
          accept: () => {
            // Actual logic to perform a confirmation
            const index = this.opstineL.indexOf(tOpstine);
            this.opstineL.splice(index, 1);
            this.opstService.delOpstine(tOpstine._id)
              .subscribe((pos) => {
                if (pos.success) {
                  this.flashMessage.show(pos.message, {
                      cssClass: 'alert-success',
                      timeout: 1000});
                }else {
                 // this.router.navigate(['NotFound']);
                  this.flashMessage.show(pos.message , {
                    cssClass: 'btn-danger',
                    timeout: 5000});
                    this.opstineL.splice(index, 0, tOpstine);
                }
                } ,
                (error: ResponeCustom) => {
                  this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 5000});
                    if (error.status === 404 ) {
                      this.router.navigate(['NotFound']);
                    }
                    if (error.status === 401) {
                       this.router.navigate(['login']);
                    }
                  // Revert the view back to its original state
                  this.opstineL.splice(index, 0, tOpstine);
                });
          }
        });
}


  // if (confirm("Are you sure you want to delete " + topstina.Naziv + "?")) {
  //   var index = this.opstine.indexOf(topstina);
  //   console.log("index je " + index);
  //   this.opstine.splice(index, 1);

  //   this.opstService.delOpstine(topstina._id)
  //     .subscribe(null,
  //       err => {
  //         alert("Could not delete drzavu.");
  //         // Revert the view back to its original state
  //         this.opstine.splice(index, 0, topstina);
  //       });
  // }
}



