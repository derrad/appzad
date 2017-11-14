import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Posao } from './posao.model';
import { PosaoService } from './posao.service';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { ConfirmDialogModule, ConfirmationService} from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ResponeCustom } from './../../shared/models/ErrorRes';

@Component({
  selector: 'app-posao',
  templateUrl: './posao.component.html',
  styleUrls: ['./posao.component.css'],
  animations: [routerTransition()]
})
export class PosaoComponent implements OnInit {

  Title: string;
  selectedPosao: Posao;
  poslovi: Array<Posao>;
  displayDetals = false;
  posShow: Posao = new Posao();

  constructor(private router: Router, private posService: PosaoService,
    private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService ) {
    this.Title = 'PREGLED POSLOVA';
  }

  ngOnInit() {

    this.posService.getPoslovi()
    .subscribe(profile => {
      if (profile.success === true) {
        this.poslovi = profile.data;
      }
    },
    (error: ResponeCustom) => {
      this.flashMessage.show(error.message, {
        cssClass: 'alert-danger',
        timeout: 9000});
        this.poslovi = [];
        return false;
    }
  );
 }

 selectPosao( work: Posao) {
     this.displayDetals = true;
   this.posShow = this.cloneData(work);
}

cloneData(c: Posao): Posao {
  const work = new Posao();
  // tslint:disable-next-line:forin
  for (const prop in c) {
    work[prop] = c[prop];
  }
  return work;
 }

 addPosao() {
  this.router.navigate(['/posao/new']);
  }

 updatePosao(id) {
  this.router.navigate(['/posao/', id]);
 }

 deletePosao(tposao) {
   this.confirmationService.confirm({
      message: `Jeste li sigurni da želite uklonite izabrani posao ?   ` ,
      header: `${tposao.Naziv}`,
        accept: () => {
          const index = this.poslovi.indexOf(tposao);
          this.poslovi.splice(index, 1);
          this.posService.delPosao(tposao._id)
            .subscribe((pos) => {
              if (pos.success) {
                 this.flashMessage.show(pos.message, {
                    cssClass: 'alert-success',
                    timeout: 1000});
              }else {
                this.router.navigate(['NotFound']);
              }
              } ,
              (error: ResponeCustom) => {
                this.flashMessage.show(error.message, {
                  cssClass: 'alert-danger',
                  timeout: 5000});
                // Revert the view back to its original state
                this.poslovi.splice(index, 0, tposao);
              });
        }
      });
  }


}
