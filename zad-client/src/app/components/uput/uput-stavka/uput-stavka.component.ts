import { Component,  EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Posao } from './../../posao/posao.model';
import { ZadrugarModel} from './../../zadrugar/zadrugar-model';

@Component({
  selector: 'app-uput-stavka',
  templateUrl: './uput-stavka.component.html',
  styleUrls: ['./uput-stavka.component.css']
})
export class UputStavkaComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input()
  public Stavke: FormGroup;

  @Input('zadrugarL')
  public zadrugarL: Array<ZadrugarModel>;

  @Input('poslL')
  public poslL: Array<Posao>;

  @Output() removeStavke = new EventEmitter<any>();
  selectedZadr: ZadrugarModel;
  displayZadrugar = false;
  ngOnInit() {
   // console.log('Zadrugari su +' + JSON.stringify(this.zadrugarL));

  }

  onClickRemove(tStav) {
    // console.log('Klik u stavkama' + tStav);
    this.removeStavke.emit(tStav);
 }
 GetZadrugar() {
   if (this.zadrugarL.length === 0 ) {
     return ;
   }
  // this.flashMessage.show('Tražimo kupca iz pick liste', {
  //   cssClass: 'alert-danger',
  //   timeout: 9000});
   this.displayZadrugar = false;
}

  PickZadrugar(event) {
    this.displayZadrugar = false;
  // console.log(JSON.stringify(this.selectedKupac));
    if (this.selectedZadr) {
      if (this.selectedZadr._id) {
       // this.PartneriID.setValue(this.selectedZadr._id);
      }
    }
  }

}
