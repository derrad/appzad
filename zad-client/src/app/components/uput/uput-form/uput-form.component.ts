import { Component, OnInit, Directive, OnDestroy } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { formsTransition} from '../../../animation/forms.animations';
import { UputService } from '../uput.service';
import { UputModel, UputStavModel, UputRacVlasnikModel } from '../uput.model';
import { FlashMessagesService} from 'angular2-flash-messages';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom} from './../../../shared/models/ErrorRes';
import { ZadrugarModel} from './../../zadrugar/zadrugar-model';
import { ZadrugarService } from './../../zadrugar/zadrugar.service';
import { PartnerService } from './../../partner/partner.service';
import { PartnerModel } from './../../partner/partner-model';
import { VlasnikService } from './../../vlasnik/vlasnik.service';
import { RacunVlasnikModel } from './../../vlasnik/vlasnik-model';
import { PosaoService } from './../../posao/posao.service';
import { Posao } from './../../posao/posao.model';



@Component({
  selector: 'app-uput-form',
  templateUrl: './uput-form.component.html',
  styleUrls: ['./uput-form.component.css'],
  animations: [formsTransition()]
})
export class UputFormComponent implements OnInit, OnDestroy {
  formUput: FormGroup;
  title: string;
  uputN: UputModel = new UputModel();
  racvlasnikL: Array<RacunVlasnikModel>;
  kupacL: Array<PartnerModel>;
  zadrL: Array<ZadrugarModel>;
  poslL: Array<Posao>;
  saveTemp = true;

  constructor(private partnService: PartnerService,  private posService: PosaoService,
              private vlasnService: VlasnikService, private zadrService: ZadrugarService,
              private uputService: UputService,
              private router: Router, private route: ActivatedRoute, private _fb: FormBuilder,
              private _location: Location, private flashMessage: FlashMessagesService,
              private serValidate: ServiceValidateShared, ) {

      this.formUput = this._fb.group({
        _id: [],
        Broj: ['', [Validators.required]],
        Godina: ['', [ Validators.required]],
        Datum: ['', [ Validators.required]],
        RacVlasnika: ['', [ Validators.required]],
        PosloviID: ['', [ Validators.required]],
        PartneriID: ['', [ Validators.required]],
        Stavke: this._fb.array([
            ])
      });
    }

  ngOnInit() {

    this.partnService.getActivPartner().subscribe(profile => {
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

  this.zadrService.getActivZadrugar().subscribe(profile => {
    if (profile.success === true) {
        this.zadrL = profile.data;
      }else {
      this.flashMessage.show(profile.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
        this.zadrL = [];
      }
  },
  (error: ResponeCustom) => {
    console.log(error);
      this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000});
      this.zadrL = [];
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
       this.loadTempData();
       this.SetGodinaBroj();
       return;
    }

    this.uputService.getUput(id)
      .subscribe(
        (pos) => {
          if (pos.success) {
            this.saveTemp = false;
             this.uputN = pos.data[0];
            // this.partAdresa = pos.data[0].Adresa;
            // this.initAdresa(this.partAdresa);
             // console.log(JSON.stringify(this.vlasnN ));
             // this.initDataZiro();
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


  private SetGodinaBroj() {
    console.log('Usao u SetGodinaBroj');
  //  this.Broj.setValue(1);
    this.Godina.setValue(new Date().getFullYear());
    this.Datum.setValue(new Date());
    this.formUput.controls['Broj'].setValue(1);

  }




  get RacVlasnika() { return this.formUput.get('RacVlasnika'); }
  get PosloviID() { return this.formUput.get('PosloviID'); }
  get Datum() { return this.formUput.get('Datum'); }
  get PartneriID() { return this.formUput.get('PartneriID'); }
  get Stavke(): FormArray { return this.formUput.get('Stavke') as FormArray; }

  get Broj() { return this.formUput.get('Broj'); }
  get Godina() { return this.formUput.get('Godina'); }





  save() {
    const FPValue = this.formUput.value;
    // console.log('Ovo je save - objekat iz forme');
    // console.log(JSON.stringify(FPValue));

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
          // console.log(" forma INSERT "  + error.toString()  + " ima li jos nesto" + error);
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

revert() { this.clearFormData(); }

clearFormData() {
    this.formUput.reset({
      Broj: '',
      Godina: '',
      Datum: '',
      RacVlasnika: null,
      PosloviID: null,
      PartneriID: null,
      Stavke: null
    });
}

ngOnDestroy() {
  this.setTempData();
}




}
