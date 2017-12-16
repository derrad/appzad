import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PickDrzave } from '../../drzave/drzave.model';
import { DrzaveService } from '../../drzave/drzave.service';
import { OpstineService } from '../opstine.service';
import { Opstine } from '../opstine.model';
import { Location } from '@angular/common';
import { formsTransition } from '../../../animation/forms.animations';
import { ResponeCustom } from '../../../shared/models/ErrorRes';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-opstine-form',
  templateUrl: './opstine-form.component.html',
  styleUrls: ['./opstine-form.component.css'],
  animations: [formsTransition()]
})
export class OpstineFormComponent implements OnInit, OnDestroy {

  formOPST: FormGroup;
  title: string;
  opstina: Opstine = new Opstine();
  drzave: Array<PickDrzave>;
  saveTemp = true;
  displayPick = false;
  selectedPickDrzavu: PickDrzave;
  pickHeight = (window.innerHeight) * 0.8;
  pickWidth = (window.innerWidth) * 0.8;
  auto = 'auto';

  constructor(private opstService: OpstineService,
    private drzaveService: DrzaveService, private router: Router, private route: ActivatedRoute,
    formBuilder: FormBuilder, private _location: Location, private flashMessage: FlashMessagesService) {

    this.formOPST = formBuilder.group({
      _id: [],
      Drzava: ['', [Validators.required]],
      RegOzn: ['', [
        Validators.required,
        Validators.maxLength(50)
      ]],
      Naziv: ['', [
        Validators.required
      ]],
      SifPorez: [],
      KontBr: [],
      PozivNaBr: [],
      Opis: []
    });
  }

  GetPickDrzava() {
    // this.flashMessage.show('Tražimo kupca iz pick liste', {
    //   cssClass: 'alert-danger',
    //   timeout: 9000});
    this.displayPick = true;
  }
  PickDrzava(event) {
    this.displayPick = false;
    console.log('Ovo parametar koji sam dobio' + JSON.stringify(event));
    this.selectedPickDrzavu = event;
    // console.log(JSON.stringify(this.selectedKupac));
    if (this.selectedPickDrzavu) {
      if (this.selectedPickDrzavu._id) {
        this.Drzava.setValue(this.selectedPickDrzavu._id);
        // console.log('Ovo je id koji sam dobio' + this.selectedPickDrzavu._id);
      }
    }
  }


  get RegOzn() { return this.formOPST.get('RegOzn'); }
  get Naziv() { return this.formOPST.get('Naziv'); }
  get Drzava() { return this.formOPST.get('Drzava'); }

  ngOnInit() {
    this.drzaveService.getPickDrzave().subscribe(profile => {
      if (profile.success === true) {
        this.drzave = profile.data;
      }
    },
      (error: ResponeCustom) => {
        this.drzave = [];
        if (error.status === 401) {
          this.router.navigate(['login']);
        }
        return false;
      });

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.title = id ? 'Ažuriranje opštine' : 'Nova opština';

      if (!id) {
        this.loadTempData();
        return;
      }

      this.opstService.getOpstina(id)
        .subscribe(
        (result) => {
          if (result.success) {
            this.saveTemp = false;
            this.opstina = result.data[0];
          } else {
            this.flashMessage.show(result.message, {
              cssClass: 'alert-danger',
              timeout: 5000
            });
            // this.router.navigate(['NotFound']);
          }
        },
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000
          });
          if (error.status === 404) {
            this.router.navigate(['NotFound']);
          }
          if (error.status === 401) {
            this.router.navigate(['login']);
          }
        });
    });

  }


  // GetPickWidth(): number {

  //   return 500;
  // }
  loadTempData() {
    const opst = JSON.parse(localStorage.getItem('data_opstina'));
    if (opst) {
      this.opstina = opst;
    }
  }

  setTempData() {
    const opstValue = JSON.stringify(this.formOPST.value);
    if (opstValue) {
      if (this.saveTemp) {
        localStorage.setItem('data_opstina', opstValue);
      } else {
        this.clearTempData();
      }
    }
  }

  clearTempData() {
    localStorage.removeItem('data_opstina');
  }

  backClicked(event: any) {
    this.setTempData();
    this._location.back();
  }


  save() {
    const opstineValue = this.formOPST.value;
    if (opstineValue._id) {
      this.opstService.updateOpstine(opstineValue).subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000
            });
            this.router.navigate(['opstine']);
          } else {
            //  this.router.navigate(['NotFound']);
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-danger',
              timeout: 5000
            });
          }
        },
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000
          });
          if (error.status === 404) {
            this.router.navigate(['NotFound']);
          }
          if (error.status === 401) {
            this.router.navigate(['login']);
          }
        },
      );
    } else {
      this.opstService.addOpstine(opstineValue)
        .subscribe(
        (pos) => {
          if (pos.success) {
            this.clearTempData();
            this.saveTemp = false;
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000
            });
            this.router.navigate(['opstine']);
          } else {
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-danger',
              timeout: 5000
            });
          }
        },
        (error: ResponeCustom) => {
          this.flashMessage.show(error.message, {
            cssClass: 'alert-danger',
            timeout: 9000
          });
          if (error.status === 404) {
            this.router.navigate(['NotFound']);
          }
          if (error.status === 401) {
            this.router.navigate(['login']);
          }
        },
      );
    }
  }

  revert() {
    // this.clearFormData();
    this.formOPST.reset();
   }

  // clearFormData() {
  //   this.formOPST.reset({
  //     Naziv: '',
  //     RegOzn: '',
  //     SifPorez: '',
  //     KontBr: '',
  //     PozivNaBr: '',
  //     Opis: ''
  //   });
  // }

  ngOnDestroy() {
    this.setTempData();
  }

}
