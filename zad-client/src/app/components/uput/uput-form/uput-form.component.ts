import { Component, OnInit, Directive, OnDestroy, EventEmitter, Input, Output, AfterViewInit, AfterViewChecked} from '@angular/core';
import {AfterContentInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { formsTransition} from '../../../animation/forms.animations';
import { UputService } from '../uput.service';
import { UputModel, UputStavModel, UputRacVlasnikModel, UputBrojGodina, PosaoNG } from '../uput.model';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom} from './../../../shared/models/ErrorRes';
import { PickZadrugarModel} from './../../zadrugar/zadrugar-model';
import { ZadrugarService } from './../../zadrugar/zadrugar.service';
import { PartnerService } from './../../partner/partner.service';
import { PickPartnerModel } from './../../partner/partner-model';
import { VlasnikService } from './../../vlasnik/vlasnik.service';
import { RacunVlasnikModel } from './../../vlasnik/vlasnik-model';
import { PosaoService } from './../../posao/posao.service';
import { Posao } from './../../posao/posao.model';
import { UputStavkaComponent } from '../uput-stavka/uput-stavka.component';

// AfterViewInit, AfterViewChecked, AfterContentInit,

@Component({
  selector: 'app-uput-form',
  templateUrl: './uput-form.component.html',
  styleUrls: ['./uput-form.component.css'],
  animations: [formsTransition()]
})
export class UputFormComponent implements OnInit,  OnDestroy {
  formUput: FormGroup;
  title: string;
  uputN: UputModel = new UputModel();
  racvlasnikL: Array<RacunVlasnikModel>;
  kupacL: Array<PickPartnerModel>;
  zadrL: Array<PickZadrugarModel>;
  poslL: Array<Posao>;
  PosaoSel: Posao;
  saveTemp = true;
  godbroj: UputBrojGodina = new UputBrojGodina();
  displayKupac = false;
  selectedKupac: PickPartnerModel;
  pickHeight = (window.innerHeight) * 0.8;
  pickWidth = (window.innerWidth) * 0.8;

  constructor(private partnService: PartnerService,  private posService: PosaoService,
              private vlasnService: VlasnikService, private zadrService: ZadrugarService,
              private uputService: UputService,
              private router: Router, private route: ActivatedRoute, private _fb: FormBuilder,
              private _location: Location, private flashMessage: FlashMessagesService,
              private serValidate: ServiceValidateShared) {

      this.formUput = this._fb.group({
        _id: [],
        Broj: ['', [Validators.required]],
        Godina: ['', [ Validators.required]],
        Datum: ['', [ Validators.required]],
        RacVlasnika: ['', [ Validators.required]],
        PosloviID: ['', [ Validators.required]],
        PartneriID: ['', [ Validators.required]],
        Opis: [''],
        Stavke: this._fb.array([
            ])
      });
    }

    get RacVlasnika() { return this.formUput.get('RacVlasnika'); }
    get PosloviID() { return this.formUput.get('PosloviID'); }
    get Datum() { return this.formUput.get('Datum'); }
    get PartneriID() { return this.formUput.get('PartneriID'); }
    get Stavke(): FormArray { return this.formUput.get('Stavke') as FormArray; }
    get Broj() { return this.formUput.get('Broj'); }
    get Godina() { return this.formUput.get('Godina'); }

  ngOnInit() {

    this.partnService.getPickPartner().subscribe(profile => {
      if (profile.success === true) {
          this.kupacL = profile.data;
        }else {
        this.flashMessage.show(profile.message, {
              cssClass: 'alert-danger',
              timeout: 9000});
          this.kupacL = [];
        }
    },
    (error: ResponeCustom) => {
      console.log(error);
        this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
        this.kupacL = [];
        return false;
    });

  this.vlasnService.getVlasnRacun().subscribe(profile => {
    if (profile.success === true) {
        this.racvlasnikL = profile.data;
      }else {
      this.flashMessage.show(profile.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
        this.racvlasnikL = [];

      }
  },
  (error: ResponeCustom) => {
    console.log(error);
      this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000});
      this.racvlasnikL = [];
      return false;
  });

  this.zadrService.getPickZadrugari().subscribe(profile => {
    if (profile.success === true) {
        this.zadrL = profile.data;
        // this.addZadlist.emit(this.zadrL);
      }else {
      this.flashMessage.show(profile.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
        this.zadrL = [];
       //  this.addZadlist.emit(this.zadrL);
      }
  },
  (error: ResponeCustom) => {
    console.log(error);
      this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000});
      this.zadrL = [];
      // this.addZadlist.emit(this.zadrL);
      return false;
  });

  this.posService.getPoslovi().subscribe(profile => {
    if (profile.success === true) {
        this.poslL = profile.data;
    }else {
      this.flashMessage.show(profile.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
        this.poslL = [];
    }
  },
  (error: ResponeCustom) => {
    console.log(error);
      this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000});
      this.poslL = [];
      return false;
  });


  this.route.params.subscribe(params => {
    const id = params['id'];
    this.title = id ? 'Ažuriranje uputa' : 'Novi uput';
    if (!id) {
       // this.initAdresa("","","","","","");
      // this.uputN.PosloviID = '';
      //  this.PartneriID.setValue(null);
      //  this.RacVlasnika.setValue(null);
      //  this.PosloviID.setValue('');
       this.loadTempData();
       this.InitGodinaBroj();
      //  if (this.Stavke.controls.length  === 0 ) {
      //    this.addStavke();
      //  }
       return;
    }
    // this.InitGodinaBroj();
    this.uputService.getUput(id)
      .subscribe(
        (pos) => {
          if (pos.success) {
            this.saveTemp = false;
             this.uputN = pos.data;
            // this.partAdresa = pos.data[0].Adresa;
            // this.initAdresa(this.partAdresa);
             // console.log(JSON.stringify(this.vlasnN ));
             this.InitDokZag();
              this.initDataStavke();
            // this.initDataTelefon();
            // this.initDataKomtakt();

          }else {
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-danger',
              timeout: 9000});
            this.router.navigate(['NotFound']);
          }
        } ,
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
          // if (error == 404 || error.status == 400 ) {
              this.router.navigate(['NotFound']);
          // }
        });
    });
}

// ngAfterViewInit() {
//   // if (this.Stavke.controls.length  === 0 ) {
//   //   this.addStavke();
//   // }
// console.log('ngAfterViewInit');
// }

// ngAfterViewChecked() {
//   if (this.Stavke.controls.length  === 0 ) {
//    console.log('OVO - ngAfterViewChecked');
//   }
// }

// ngAfterContentInit() {
//   if (this.Stavke.controls.length  === 0 ) {
//   console.log('ngAfterContentInit');
//   }
// }

private SetDatumForm() {
  const dp = new DatePipe(navigator.language);
  const p = 'y-MM-dd'; // YYYY-MM-DD
  const dtr = dp.transform(new Date(), p);
  this.Datum.setValue({effectiveEndDate: dtr});
 // this.transitionForm.setValue({effectiveEndDate: dtr});
}


private SetGodinaBroj(tDatum: Date) {
   // console.log('Usao u SetGodinaBroj ' + tDatum);
  //  this.Broj.setValue(1);
    // this.Godina.setValue(new Date().getFullYear());
   // this.uputN.Datum = new Date();
    // this.Datum.setValue(new Date());
    // this.formUput.controls['Broj'].setValue(1);
    // const Datum = JSON.parse(this.Datum.value)
     this.Broj.setValue(1);
     this.Godina.setValue(new Date().getFullYear());
     if (!tDatum) {
      tDatum = new Date();
     }

    this.uputService.getUputBrojGod({Datum: tDatum})
    .subscribe(
      (pos) => {
        if (pos.success) {
          // console.log(' na dobrom mestu sam' + JSON.stringify(pos));
          // console.log('Broj jurim' +  pos.data.broj);
          this.godbroj.broj = pos.data.broj;
          this.godbroj.godina = pos.data.godina;
          this.Broj.setValue(pos.data.broj);
          // console.log(' A upisao sam ga u mom objektu '  + this.godbroj.broj);
          // console.log(' Godinu jurim' +  pos.data.godina);
          this.Godina.setValue(pos.data.godina);
          // console.log(' A upisao sam this.godbroj ga u mom objektu '  + this.godbroj.godina);
        }else {
          this.flashMessage.show(pos.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
            this.godbroj.broj = 1;
            this.godbroj.godina = new Date().getFullYear();
        }
      } ,
      (error: ResponeCustom) => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000});
          this.godbroj.broj = 1;
          this.godbroj.godina = new Date().getFullYear();
         // console.log('Error servica');

      });

      // console.log(' A Broj pre upisa u mom objektu '  + this.godbroj.broj);
      // console.log(' A Godina pre upisa u mom objektu '  + this.godbroj.godina);

      // // this.formUput.get('Broj').setValue(this.godbroj.broj);
      // this.Godina.setValue(this.godbroj.godina );
      // this.Broj.setValue(this.godbroj.broj);
}

onBlurDatum() {
  let Datum = this.Datum.value;
  console.log('Datum u on blur' + Datum);
  if (!Datum) {
    Datum = new Date();
  }
  this.SetGodinaBroj(Datum);
  // this.flashMessage.show(`onBlurDatum ${this.uputN.Datum} a iz forme ${this.Datum.value}`, {
  //   cssClass: 'alert-danger',
  //   timeout: 9000});
}

InitGodinaBroj() {
  this.uputN.Datum = new Date();
  this.Datum.setValue(this.uputN.Datum);
  this.SetDatumForm();
  this.SetGodinaBroj(this.uputN.Datum);
  console.log('Ovo je sada u uputu' + JSON.stringify(this.uputN));

}

GetKupac() {
   this.displayKupac = true;
}

PickKupac(event) {
  this.displayKupac = false;
  this.selectedKupac = event;
  if (this.selectedKupac) {
    if (this.selectedKupac._id) {
      this.PartneriID.setValue(this.selectedKupac._id);
    }
  }
}

// Init zaglavlja
InitDokZag() {

 this.Broj.setValue(this.uputN.Broj);
 this.Godina.setValue(this.uputN.Godina);
 this.PartneriID.setValue(this.uputN.PartneriID);
 this.RacVlasnika.setValue(this.uputN.RacVlasnika);
 this.Datum.setValue(this.uputN.Datum);
 this.PosloviID.setValue(this.uputN.PosloviID);
}

// Stavke
initDataStavke() {
  let rbr = 0;
  for ( const item of this.uputN.Stavke) {
        rbr = rbr + 1;
        const control = <FormArray>this.formUput.controls['Stavke'];
        control.push(this.initStavke(item.IDZadrugar, rbr, item.ZadrugarID, item.PosloviID));
  }
 }
initStavke(tIDZadrugar: Number, tRbr: Number, tZadrugarID: Object, tPosloviID: Object ) {
    return this._fb.group({
      IDZadrugar: [tIDZadrugar, Validators.required],
      Rbr: [tRbr, Validators.required],
      ZadrugarID: [tZadrugarID, Validators.required],
      PosloviID: [tPosloviID, Validators.required]
   });
}
addStavke() {
    const control = <FormArray>this.formUput.controls['Stavke'];
    const broj = control.controls.length + 1;
    const posao = this.PosloviID.value;
    console.log('Poslovi su : ' + posao);
    if (posao) {
      control.push(this.initStavke(0, broj, '', posao));
    }else {
      control.push(this.initStavke(0, broj, '', ''));
    }
  //  this.reorderStav();
}
removeStavke(i: number) {
    if (i >= 0) {
     const control = <FormArray>this.formUput.controls['Stavke'];
     control.removeAt(i);
    }
  //  console.log('ovo sam dobio iz stavki' + i);
   this.reorderStav();
}

reorderStav() {
  let rbr = 0;
  const controls = <FormArray>this.formUput.controls['Stavke'];
  for ( const item of this.Stavke.controls) {
    rbr = rbr + 1;
    const Idzadr = item.get('IDZadrugar').value;
    const id = item.get('ZadrugarID').value;
    const idpos = item.get('PosloviID').value;
    item.setValue({'Rbr': rbr , 'IDZadrugar': Idzadr, 'ZadrugarID': id, 'PosloviID': idpos });
  }

}


  save() {
    const FPValue = this.formUput.value;
    if (this.Stavke.length === 0) {
      this.flashMessage.show('Nema stavki uputa', {
        cssClass: 'alert-danger',
        timeout: 2000});
      return;
    }
    this.prepareStavke(FPValue);
    // if (FPValue.Stavke.lenght === 0) {
    // }

    //  console.log('Ovo je save - objekat iz forme');
    //  console.log(JSON.stringify(FPValue));

    // return;
    if (FPValue._id) {
       this.uputService.updateUput(FPValue).subscribe(
        (pos) => {
          if ( pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['uput']);
          }else {
            this.router.navigate(['NotFound']);
          }
        } ,
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});

         // console.log(" forma UPDATE  " + error);

        },

      );

    } else {

      this.uputService.addUput(FPValue)
      .subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['uput']);
          }else {
            this.router.navigate(['NotFound']);
          }
        } ,
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
           console.log( ' forma INSERT '  + JSON.stringify(error)  + ' ima li jos nesto' + error);
         },
       );
    }
  }


  loadTempData() {
    const wdata = JSON.parse(localStorage.getItem('data_uput'));
    if (wdata) {
      this.uputN = wdata;
    }
  }

setTempData() {
    const  fsValue = JSON.stringify(this.formUput.value);
    if (fsValue) {
      if (this.saveTemp) {
        localStorage.setItem('data_uput', fsValue);
      }else {
        this.clearTempData();
      }
    }

}

clearTempData() {
     localStorage.removeItem('data_uput');
}

backClicked(event: any) {
    this.setTempData();
    this._location.back();
}

revert() {
  this.formUput.reset();
 // this.clearFormData();
}

clearFormData() {
    this.formUput.reset({
      Broj: '',
      Godina: '',
      Datum: '',
      RacVlasnika: null,
      PosloviID: null,
      PartneriID: null
     });
}

ngOnDestroy() {
  this.setTempData();
}

compareVlasRacun(c1: UputRacVlasnikModel, c2: UputRacVlasnikModel): boolean {
  return c1 && c2 ? c1.Naziv === c2.Naziv : c1 === c2;
}

private prepareStavke(tuputN: UputModel) {
  let rbr = 0;
  for ( const item of tuputN.Stavke) {
    const idZad = item.ZadrugarID;
    const idPosao = item.PosloviID;
    rbr = rbr + 1;
    item.Rbr = rbr;
    for ( const zadrugar of this.zadrL) {
       if (zadrugar._id === idZad) {
        item.ZadRef = {
          _id : zadrugar._id,
           name: zadrugar.fullName,
           tipzadrugar : zadrugar.TipZadrugar,
           idzadrugar : zadrugar.IDZadrugar,
           jmbg : zadrugar.Jmbg
        };
        item.IDZadrugar = zadrugar.IDZadrugar;
       }


    }

    for ( const posao of this.poslL) {
      if (posao._id === idPosao) {
        item.PosloviRef = {
          _id : posao._id,
          name: posao.Naziv,
          stepenss : posao.StepenSS
        };
       }

    }
  }
}

// // https://valor-software.com/ng2-select/

// removedPosaoDok(value: any): void {
//     console.log('Removed value is: ', value);
// }
// public selectedPosaoDok(value: any): void {
//   console.log('Selected value is: ', value);
//   this.PosloviID.setValue(value.id);
// }
// <ng-select  formControlName="PosloviID"  [allowClear]="true" required
// [items]="NGposaoL"
// (removed)="removedPosaoDok($event)"
// (selected)="selectedPosaoDok($event)"
// placeholder="--Select posao--">
// </ng-select>

}
