import { Component, OnInit, OnDestroy} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BankeModel} from '../banke-model';
import { BankeService } from '../banke.service';
import { Location} from '@angular/common';
import { formsTransition } from '../../../animation/forms.animations';
import { ServiceValidateShared } from './../../../services/service.validate.shared';
import { ResponeCustom} from './../../../shared/models/ErrorRes';
import { FlashMessagesService} from 'angular2-flash-messages';
// import * as $ from 'jquery';


@Component({
  selector: 'app-banke-form',
  templateUrl: './banke-form.component.html',
  styleUrls: ['./banke-form.component.css'],
  animations: [ formsTransition()]
})
export class BankeFormComponent implements OnInit, OnDestroy {

  frmBank: FormGroup;
  title: string;
  bankaN: BankeModel = new BankeModel();
  private saveTemp = true;


  constructor(private bankeService: BankeService, private router: Router, private route: ActivatedRoute,
    formBuilder: FormBuilder, private _location: Location, private serValidate: ServiceValidateShared,
    private flashMessage: FlashMessagesService) {

      this.frmBank = formBuilder.group({
        _id: [],
        Racun: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        Aktivan: [],
        Naziv: ['', [Validators.required, Validators.maxLength(100)]],
        Opis: []
      });
  }

  get Racun() { return this.frmBank.get('Racun'); }
  get Naziv() { return this.frmBank.get('Naziv'); }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];

      this.title = id ? 'Ažuriranje banke' : 'NOVA BANKA';

      if (!id) {
        this.loadTempData();
        return;
      }

        this.bankeService.getBanka(id)
        .subscribe(
          (pos) => {
            if (pos.success) {
              this.saveTemp = false;
              this.bankaN = pos.data[0];
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

  save() {
  //  this.sizeTheOverlays();
  // $('#mainpanel').addClass('overlay');
  // $('.panel').addClass('overlay');
  //  let i: number;
  //  for (i = 0; i < 10000 ; i++) {
  //    console.log(i);
  //  }
   const  frmValue = this.frmBank.value;
   // frmValue.Naziv = null;
   if (frmValue._id) {
       this.bankeService.updateBanka(frmValue).subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['banke']);
          }else {
            this.router.navigate(['NotFound']);
          }
        } ,
        (error: ResponeCustom) => {
          console.log('greska je');
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
           timeout: 9000});
        },
      );

    } else {

      this.bankeService.addBanke(frmValue)
      .subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['banke']);
          }else {
            this.router.navigate(['NotFound']);
          }
        } ,
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000});
        }
      );
    }
    // $('#mainpanel').removeClass('overlay');
    // $('.panel').removeClass('overlay');
  }

 // sizeTheOverlays() {
   // $('#mainpanel').addClass('overlay');
    // $('.overlay').resize().each(function() {
    //   const h: any = $(this).parent().outerHeight();
    //   const w: any = $(this).parent().outerWidth();
    //   $(this).css('height', h);
    //   $(this).css('width', w);
    // });
// }


 loadTempData() {
    const valuetemp = JSON.parse(localStorage.getItem('data_banka'));
    if (valuetemp) {
      this.bankaN = valuetemp;
    }
  }

  setTempData() {
    const  fsValue = JSON.stringify(this.frmBank.value);
    if (fsValue) {
      if (this.saveTemp) {
        localStorage.setItem('data_banka', fsValue);
      }else {
        this.clearTempData();
      }
    }
   }

 clearTempData() {
     localStorage.removeItem('data_banka');
  }

  backClicked(event: any) {
    this.setTempData();
    this._location.back();
  }

  revert() { this.clearFormData(); }

  clearFormData() {
    this.frmBank.reset({
      Racun: '',
      Naziv: '',
      Aktivan: '',
      Opis: ''
    });
  }

  ngOnDestroy() {
    this.setTempData();
  }

}
