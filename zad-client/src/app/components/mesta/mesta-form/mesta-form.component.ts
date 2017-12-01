import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Mesta } from './../mesta.model';
import { MestaService } from './../mesta.service';
import { PickOpstine} from '../../opstine/opstine.model';
import { Location} from '@angular/common';
import { formsTransition} from '../../../animation/forms.animations';
import { OpstineService} from './../../opstine/opstine.service';
import { ResponeCustom } from '../../../shared/models/ErrorRes';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-mesta-form',
  templateUrl: './mesta-form.component.html',
  styleUrls: ['./mesta-form.component.css'],
  animations: [formsTransition()]

})
export class MestaFormComponent implements OnInit, OnDestroy  {
  formMEST: FormGroup;
  title: string;
  mesto: Mesta = new Mesta();
  opstL: Array<PickOpstine>;
  saveTemp = true;
  displayPick = false;
  selectedPickOpst: PickOpstine;

  // pickHeight = (window.screen.height) * 0.8;
  // pickWidth = (window.screen.width) * 0.8;

  pickHeight = (window.innerHeight) * 0.8;
  pickWidth = (window.innerWidth) * 0.8;

  constructor(private opstService: OpstineService,
    private mestaService: MestaService, private router: Router, private route: ActivatedRoute,
    formBuilder: FormBuilder, private _location: Location, private flashMessage: FlashMessagesService) {

      this.formMEST = formBuilder.group({
        _id: [],
        Opstina: ['', [Validators.required]],
        Naziv: ['', [
          Validators.required
        ]],
        Ptt: [],
        Opis: []
      });

      this.formMEST.valueChanges
      .filter(data => this.formMEST.valid)
      .map((data: Mesta) => {
              let strOpis = data.Opis;
              if (strOpis) {
                strOpis = strOpis.replace(/<(?:.|\n)*?>/gm, '');
               // console.log('Opis u if ' + strOpis);
                data.Opis = strOpis;
              }
              let strNaziv = data.Naziv;
              if (strOpis) {
                strNaziv = strNaziv.replace(/<(?:.|\n)*?>/gm, '');
                data.Naziv = strNaziv;
              }
              return data;
             })
             .subscribe( data => {
                // console.log(JSON.stringify(data));
                           //  this.updateForm();
             });

    }

  get Naziv() { return this.formMEST.get('Naziv'); }
  get Opstina() { return this.formMEST.get('Opstina'); }
  get Ptt() { return this.formMEST.get('Ptt'); }
  get Opis() { return this.formMEST.get('Opis'); }

  GetPickOpstina() {
    this.displayPick = true;
  }

  PickOpstina(event) {
    this.displayPick = false;
    console.log('Ovo parametar koji sam dobio' + JSON.stringify(event));
    this.selectedPickOpst = event;
   // console.log(JSON.stringify(this.selectedKupac));
    if (this.selectedPickOpst) {
      if (this.selectedPickOpst._id) {
        this.Opstina.setValue(this.selectedPickOpst._id);
    // console.log('Ovo je id koji sam dobio' + this.selectedPickDrzavu._id);
      }
    }
  }

  ngOnInit() {
      this.opstService.getPickOpstine().subscribe(profile => {
        if (profile.success === true) {
            this.opstL = profile.data;
         //   console.log('opstina' + JSON.stringify(this.opstL) );
        }else {
          this.flashMessage.show(profile.message, {
            cssClass: 'alert-danger',
            timeout: 5000});
        }
        },
        (error: ResponeCustom)  => {
        this.opstL = [];
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        this.flashMessage.show(error.message, {
          cssClass: 'alert-danger',
          timeout: 9000});
        return false;
        }
      );

      this.route.params.subscribe(params => {
        const id = params['id'];
        this.title = id ? 'Ažuriranje mesta' : 'Novo mesto';
        if (!id) {
          this.loadTempData();
          return;
        }
          this.mestaService.getMesto(id)
            .subscribe(
            (result) => {
              if (result.success ) {
                this.saveTemp = false;
                this.mesto = result.data[0];
                this.updateForm();
              }else {
                this.flashMessage.show(result.message, {
                  cssClass: 'alert-danger',
                  timeout: 9000});
               //  this.router.navigate(['NotFound']);
              }
            },
            (error: ResponeCustom) => {
                this.flashMessage.show(error.message, {
                  cssClass: 'alert-danger',
                  timeout: 9000});
                  if (error.status === 401) {
                    this.router.navigate(['login']);
                  }
                  this.router.navigate(['NotFound']);
              });
        });
  }


  updateForm() {
    this.Opstina.setValue(this.mesto.Opstina);
    this.Naziv.setValue(this.mesto.Naziv);
    this.Ptt.setValue(this.mesto.Ptt);
    this.Opis.setValue(this.mesto.Opis);
  }

  loadTempData() {
    const mest = JSON.parse(localStorage.getItem('data_mesto'));
    if (mest) {
      this.mesto = mest;
      this.updateForm();
    }
  }

  setTempData() {
    const  mestValue = JSON.stringify(this.formMEST.value);
    if (mestValue) {
      if (this.saveTemp) {
       localStorage.setItem('data_mesto', mestValue);
      }else {
        this.clearTempData();
      }
    }
  }

 clearTempData() {
     localStorage.removeItem('data_mesto');
  }

  backClicked(event: any) {
    this.setTempData();
    this._location.back();
  }



  save() {
    const  mestaValue = this.formMEST.value;
   // console.log('Ovo za memo ' + JSON.stringify(mestaValue));
    if (mestaValue._id) {
    //  console.log('Ovo za memo ' + JSON.stringify(mestaValue));
      this.mestaService.updateMesto(mestaValue).subscribe(
       (pos) => {
         if (pos.success) {
           this.clearTempData();
           this.saveTemp = false;
           this.flashMessage.show(pos.message, {
             cssClass: 'alert-success',
             timeout: 5000});
             this.router.navigate(['mesta']);
         }else {
           // this.router.navigate(['NotFound']);
           this.flashMessage.show(pos.message, {
            cssClass: 'alert-danger',
            timeout: 5000});
         }
       } ,
       (error: ResponeCustom) => {
         this.flashMessage.show(error.message, {
           cssClass: 'alert-danger',
           timeout: 9000});
           if (error.status === 401) {
            this.router.navigate(['login']);
          }
       },
     );
   } else {
      this.mestaService.addMesto(mestaValue)
      .subscribe(
       (pos) => {
         if (pos.success) {
           this.clearTempData();
           this.saveTemp = false;
           this.flashMessage.show(pos.message, {
             cssClass: 'alert-success',
             timeout: 5000});
             this.router.navigate(['mesta']);
         }else {
          // this.router.navigate(['NotFound']);
          this.flashMessage.show(pos.message, {
            cssClass: 'alert-danger',
            timeout: 5000});
         }
       } ,
       (error: ResponeCustom) => {
         this.flashMessage.show(error.message, {
           cssClass: 'alert-danger',
           timeout: 9000});
           if (error.status === 401) {
            this.router.navigate(['login']);
           }
       },
     );
   }
  }


  revert() { this.clearFormData(); }

  clearFormData() {
    this.formMEST.reset({
      Naziv: '',
      Ptt: '',
      Opis: ''
    });
  }

  ngOnDestroy() {
    this.setTempData();
  }


}
