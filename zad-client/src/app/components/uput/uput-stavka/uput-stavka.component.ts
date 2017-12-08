import { Component,  EventEmitter, Input, Output, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Posao } from './../../posao/posao.model';
import { PickZadrugarModel} from './../../zadrugar/zadrugar-model';
import { ServiceValidateShared } from './../../../services/service.validate.shared';

@Component({
  selector: 'app-uput-stavka',
  templateUrl: './uput-stavka.component.html',
  styleUrls: ['./uput-stavka.component.css']
})
export class UputStavkaComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line:no-input-rename
  @Input()
  public Stavke: FormGroup;

  @Input('zadrugarL')
  public zadrugarL: Array<PickZadrugarModel>;

  @Input('poslL')
  public poslL: Array<Posao>;
  @Output() removeStavke = new EventEmitter<any>();
  // @Output() OdbirZadStavke = new EventEmitter<any>();
  selectedZadr: PickZadrugarModel;
  displayZadrugar = false;
  pickHeight = (window.innerHeight) * 0.8;
  pickWidth = (window.innerWidth) * 0.8;

  constructor(private serValidate: ServiceValidateShared) {}

  ngOnInit() {
   // console.log('Zadrugari su +' + JSON.stringify(this.zadrugarL));

    this.Stavke.controls.IDZadrugar.valueChanges
          .debounceTime(400)
          .distinctUntilChanged()
          .subscribe((sifra) => {
            const zadrOdab = this.zadrugarL.find(x => x.IDZadrugar == sifra);
            if (zadrOdab) {
              this.InputZadrugar(zadrOdab);
            }else {
              this.Stavke.controls.ZadrugarID.setValue('');

            }
            //  // console.log('Usao sam gde treba ' + term);
            // for ( const zadrugar of this.zadrugarL) {
            //  // console.log('ovo imam ' + zadrugar.IDZadrugar);
            //   // tslint:disable-next-line:triple-equals
            //   if (zadrugar.IDZadrugar == term) {
            //      console.log('Nasao sam ga' + term);
            //       // this.searches.push(zadrugar);
            //       this.InputZadrugar(zadrugar);
            //     }
            //   }
          });

  }

  ngAfterViewInit() {
  //  console.log('UputStavkaComponent + ngAfterViewInit');
  //  console.log('Stavke u uput-stav ngAfterViewInit' + (this.Stavke.controls.PosloviID.value));
  //  if (this.onChangePosao(this.Stavke.controls.PosloviID.value)) {
  //    this.onChangePosao(this.Stavke.controls.PosloviID.value);
  //  }
  }

  onClickRemove(tStav) {
    // console.log('Klik u stavkama' + tStav);
    this.removeStavke.emit(tStav);
 }
 GetZadrugar() {
 //  console.log('Klik GetZadrugar UputStavkaComponent');
   if (this.zadrugarL.length === 0 ) {
     return ;
   }
  // this.flashMessage.show('Tražimo kupca iz pick liste', {
  //   cssClass: 'alert-danger',
  //   timeout: 9000});
  // console.log('Klik GetZadrugar UputStavkaComponent - ima zadrugara');
   this.displayZadrugar = true;
}

InputZadrugar(tzadr: PickZadrugarModel) {
// console.log(JSON.stringify(this.selectedKupac));
  if (tzadr) {
    if (tzadr._id) {
     // this.PartneriID.setValue(this.selectedZadr._id);
  //   console.log('saljem sada u glavnu formu' + JSON.stringify(this.selectedZadr));
  //   this.OdbirZadStavke.emit(this.selectedZadr);
    // this.Stavke[0]['ZadrugarID'].setValue(this.selectedZadr._id);
    this.Stavke.controls.ZadrugarID.setValue(tzadr._id);
    // this.Stavke.controls.PosaoID.setValue(1);
    // this.Stavke.controls.IDZadrugar.setValue(this.selectedZadr.IDZadrugar);
    console.log('Stavke u InputZadrugar' + (this.Stavke.controls.ZadrugarID.value));
    }
  }
}

  PickZadrugar(event) {
    this.displayZadrugar = false;
    this.selectedZadr = event;
  // console.log(JSON.stringify(this.selectedKupac));
    if (this.selectedZadr) {
      if (this.selectedZadr._id) {
       // this.PartneriID.setValue(this.selectedZadr._id);
    //   console.log('saljem sada u glavnu formu' + JSON.stringify(this.selectedZadr));
    //   this.OdbirZadStavke.emit(this.selectedZadr);
      // this.Stavke[0]['ZadrugarID'].setValue(this.selectedZadr._id);
      this.Stavke.controls.ZadrugarID.setValue(this.selectedZadr._id);
      this.Stavke.controls.IDZadrugar.setValue(this.selectedZadr.IDZadrugar);
      console.log('Stavke u uput-stav PickZadrugar' + (this.Stavke.controls.ZadrugarID.value));
      }
    }
  }

  onChangeZadr(event) {
   // console.log(' onChangeZadr ' + event);
    if (event) {
      const zadrOdab = this.zadrugarL.find(x => x._id === event);
      if (zadrOdab) {
        this.Stavke.controls.IDZadrugar.setValue(zadrOdab.IDZadrugar);
      }

    }
  }

  onChangePosao(event) {
    if (event) {
      const PosaoOdab = this.poslL.find(x => x._id === event);
      if (PosaoOdab) {
       // this.Stavke.controls.IDZadrugar.setValue(PosaoOdab.IDZadrugar);
       // console.log('Posao u onChangePosaoevent ' + this.Stavke.controls.PosloviID.value);
       this.Stavke.controls.PosloviID.setValue(PosaoOdab._id);
      }

    }
  }

}
