import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import {formsTransition} from '../../../animation/forms.animations';
import {FlashMessagesService} from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom} from './../../../shared/models/ErrorRes';
import { ZadrugarModel, ZDAdresaModel } from './../zadrugar-model';
import { ZadrugarService } from './../zadrugar.service';
import { ZanimanjaService } from './../../zanimanja/zanimanja.service';
import { MestaService } from './../../mesta/mesta.service';
import { BankeService } from './../../banke/banke.service';
import { ZanimanjaModel } from './../../zanimanja/zanimanja.model';
import { Mesta } from './../../mesta/mesta.model';
import { IsplateTip, ZadrugarTip, PolZadruga, IdentZadrugara } from './../../../shared/EnumApp/zadrugar.enum';
import { BankeModel } from './../../banke/banke-model';
import { DashboardService } from './../../dashboard/dashboard.service';


@Component({
  selector: 'app-zadrugar-form',
  templateUrl: './zadrugar-form.component.html',
  styleUrls: ['./zadrugar-form.component.css'],
  animations: [formsTransition()]
})
export class ZadrugarFormComponent implements OnInit, OnDestroy {
  formZadr: FormGroup;
  title: string;
  zadrN: ZadrugarModel = new ZadrugarModel();
  zadrAdresa: ZDAdresaModel;
  saveTemp = true;
  mestaL: Array<Mesta>;
  zanimL: Array<ZanimanjaModel>;
  bankeL: Array<BankeModel>;
  zadPolC = PolZadruga;
  zadIsplC = IsplateTip;
  zadTipC = ZadrugarTip;
  zadIdentC = IdentZadrugara;
  constructor(private zadrService: ZadrugarService, private router: Router, private route: ActivatedRoute,
    private _fb: FormBuilder , private _location: Location, private flashMessage: FlashMessagesService,
    private serValidate: ServiceValidateShared, private mestaService: MestaService, private zanService: ZanimanjaService,
    private bankService: BankeService, private dhServ: DashboardService ) {

      this.formZadr = this._fb.group({
        _id: [],
        IDZadrugar: ['', [Validators.required]],
        Ime: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        Prezime: ['', [ Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        ImeRoditelja: [''],
        DatRodjenja: ['', [Validators.required]],
        Aktivan: [''],
        Pol: ['', [Validators.required]],
        OpstinaRodj: [''],
        MestoRodj: [''],
        VrstaIdentifikatoraPrimaoca: ['', [Validators.required]],
        Jmbg: [''],
        Adresa : this._fb.group({
          AdUlica: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
          AdBroj: [''],
          AdMesto: [''],
          AdPttReon: [''],
          AdPttPak: [''],
          AdDrzava: ['']
        }),
        BrLK: [''],
        Telefon: [''],
        ZadEmail: [''],
        MestaID: ['', [ Validators.required]],
        ZanimanjaID: ['', [ Validators.required]],
        TipZadrugar: ['',  [ Validators.required]],
        BrRadneKnjiz: [''],
        BrIndexa: [''],
        TipIsplate: ['', [Validators.required]],
        BankaID: [''],
        BrojRacuna: [''],
        BeliBroj: [''],
        BrojDana: [''],
        Slika: [''],
        Opis: ['']
      });
    }




  ngOnInit() {
    this.bankService.getBanke()
      .subscribe((profile) => {
        if (profile.success === true) {
            this.bankeL = profile.data;
        }
      },
      (error: ResponeCustom) => {
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000});
          this.bankeL = [];
      }
    );
    this.zanService.getZanimanja()
    .subscribe((profile) => {
      if (profile.success === true) {
        this.zanimL = profile.data;
      }
      },
      (error: ResponeCustom) => {
        this.flashMessage.show(error.message, {
          cssClass: 'btn-danger',
          timeout: 9000});
          this.zanimL = [];
      }
      );
      this.mestaService.getMesta().subscribe(profile => {
        if (profile.success === true) {
           this.mestaL = profile.data;
         }
       },
       (error: ResponeCustom)  => {
         this.flashMessage.show(error.message, {
           cssClass: 'alert-danger',
           timeout: 9000});
           this.mestaL = [];
        }
       );

       this.route.params.subscribe(params => {
        const id = params['id'];
        this.title = id ? 'Ažuriranje zadrugara' : 'Novi zadrugar';
        if (!id) {
           this.loadTempData();
           this.getNewIdNumber();
           return;
        }

        this.zadrService.getZadrugar(id)
          .subscribe(
            (pos) => {
              if (pos.success) {
                this.saveTemp = false;
                 this.zadrN = pos.data[0];
                 this.zadrAdresa = pos.data[0].Adresa;
                 this.initAdresa(this.zadrAdresa);
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

        this.VrstaIdentifikatoraPrimaoca.valueChanges.subscribe(
          (validate) => {
            if (validate === 'JMBG_EBS') {
              this.Jmbg.setValidators([Validators.required, Validators.minLength(13), Validators.maxLength(13)]);
            } else {
              this.Jmbg.setValidators(null);
            }
            this.Jmbg.updateValueAndValidity();
          }
        );
        this.TipZadrugar.valueChanges.subscribe(
          (validate) => {
            if (validate === 'Ucenik') {
              this.BrIndexa.setValidators([Validators.required]);
              this.BrRadneKnjiz.setValidators(null);
            } else {
              this.BrIndexa.setValidators(null);
              this.BrRadneKnjiz.setValidators([Validators.required]);
            }
            this.BrIndexa.updateValueAndValidity();
            this.BrRadneKnjiz.updateValueAndValidity();
          }
        );
        this.TipIsplate.valueChanges.subscribe(
          (validate) => {
            if (validate === 'Gotovina') {
              this.BankaID.setValidators(null);
              this.BrojRacuna.setValidators(null);
              this.BrojRacuna.setValue(null);
              this.BankaID.setValue(null);
            } else {
              this.BankaID.setValidators([Validators.required]);
              this.BrojRacuna.setValidators([Validators.required]);
            }
            this.BankaID.updateValueAndValidity();
            this.BrojRacuna.updateValueAndValidity();
          }
        );

  }

  private getNewIdNumber() {
    this.dhServ.getZadrugaiCount().subscribe(profile => {
      if (profile.success === true) {
        const broj =  profile.number + 1;
        this.IDZadrugar.setValue(broj);
      }
    },
    err => {
      console.log(err);
      this.IDZadrugar.setValue(0);
      return false;
    });

  }

  get IDZadrugar() { return this.formZadr.get('IDZadrugar'); }
  get Ime() { return this.formZadr.get('Ime'); }
  get Prezime() { return this.formZadr.get('Prezime'); }
  get DatRodjenja() { return this.formZadr.get('DatRodjenja'); }
  get Pol() { return this.formZadr.get('Pol'); }
  get VrstaIdentifikatoraPrimaoca() { return this.formZadr.get('VrstaIdentifikatoraPrimaoca'); }
  get Jmbg() { return this.formZadr.get('Jmbg'); }
  get MestaID() { return this.formZadr.get('MestaID'); }
  get ZanimanjaID() { return this.formZadr.get('ZanimanjaID'); }
  get TipZadrugar() { return this.formZadr.get('TipZadrugar'); }
  get BrRadneKnjiz() { return this.formZadr.get('BrRadneKnjiz'); }
  get BrIndexa() { return this.formZadr.get('BrIndexa'); }
  get TipIsplate() { return this.formZadr.get('TipIsplate'); }
  get BankaID() { return this.formZadr.get('BankaID'); }
  get BrojRacuna() { return this.formZadr.get('BrojRacuna'); }
  get Adresa(): FormGroup { return this.formZadr.get('Adresa') as FormGroup; }

  initAdresa(tAdresa: ZDAdresaModel) {
    this.Adresa.setValue({
      AdUlica: tAdresa.AdUlica,
      AdBroj: tAdresa.AdBroj,
      AdMesto: tAdresa.AdMesto,
      AdPttReon: tAdresa.AdPttReon,
      AdPttPak: tAdresa.AdPttPak,
      AdDrzava: tAdresa.AdDrzava
    });
  }
  save() {
    const FZValue = this.formZadr.value;
    if (FZValue._id) {
       this.zadrService.updateZadrugar(FZValue).subscribe(
        (pos) => {
          if ( pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['zadrugar']);
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

      this.zadrService.addZadrugar(FZValue)
      .subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['zadrugar']);
          }else {
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
           // this.router.navigate(['NotFound']);
          }
        } ,
        (error: ResponeCustom) => {
          this.flashMessage.show('Error !!! ' + error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
         },
       );
    }
  }

  loadTempData() {
    const wdata = JSON.parse(localStorage.getItem('data_zadrugar'));
    if (wdata) {
      this.zadrN = wdata;
      if (this.zadrN.Adresa) {
        const adresUpi = new ZDAdresaModel();
        adresUpi.AdUlica = this.zadrN.Adresa.AdUlica || '';
        adresUpi.AdBroj = this.zadrN.Adresa.AdBroj || '';
        adresUpi.AdMesto = this.zadrN.Adresa.AdMesto || '';
        adresUpi.AdPttReon = this.zadrN.Adresa.AdPttReon || '';
        adresUpi.AdPttPak = this.zadrN.Adresa.AdPttPak || '';
        adresUpi.AdDrzava = this.zadrN.Adresa.AdDrzava || '';
        this.initAdresa(adresUpi);
      }
      console.log(this.zadrN.Adresa);
    }
  }

setTempData() {
    const  fsValue = JSON.stringify(this.formZadr.value);
    if (fsValue) {
      if (this.saveTemp) {
        localStorage.setItem('data_zadrugar', fsValue);
      }else {
        this.clearTempData();
      }
    }

}
backClicked(event: any) {
  this.setTempData();
  this._location.back();
}

clearTempData() {
     localStorage.removeItem('data_zadrugar');
}

  revert() { this.clearFormData(); }

  clearFormData() {
      this.formZadr.reset({
        IDZadrugar: '',
        Ime: '',
        Prezime: '',
        ImeRoditelja: '',
        DatRodjenja: '',
        Aktivan: '',
        Pol: '',
        OpstinaRodj: '',
        MestoRodj: '',
        VrstaIdentifikatoraPrimaoca: '',
        Jmbg: '',
        Adresa : null,
        BrLK: '',
        Telefon: '',
        ZadEmail: '',
        MestaID: '',
        ZanimanjaID: '',
        TipZadrugar: '',
        BrRadneKnjiz: '',
        BrIndexa: '',
        TipIsplate: '',
        BankaID: '',
        BrojRacuna: '',
        BeliBroj: '',
        BrojDana: '',
        Slika: '',
        Opis: ''
      });
  }
  ngOnDestroy() {
    this.setTempData();
  }
}
