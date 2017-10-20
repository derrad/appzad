import { Message } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';
import { routerTransition } from '../../../animation/router.animations' 
import { FondSatiService } from './../../../services/opcijeapp/fond-sati.service';
import { FondSati } from './../fondsati.model';
import {FlashMessagesService} from 'angular2-flash-messages';
//import { DecimalMask } from './../../../directive/decimal-mask.directive';

//import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-fond-sati-form',
  templateUrl: './fond-sati-form.component.html',
  styleUrls: ['./fond-sati-form.component.css'],
  animations: [routerTransition()]
})
export class FondSatiFormComponent implements OnInit {
  formFSAT: FormGroup;
  title: string;
  fnsatN : FondSati = new FondSati();
  constructor(private fnsatService:FondSatiService, private router:Router,private route: ActivatedRoute, 
    formBuilder: FormBuilder ,private _location: Location,private flashMessage:FlashMessagesService) {

      this.formFSAT = formBuilder.group({
        _id:[],
        Mesec:['',[Validators.required]],
        Godina: ['', [
          Validators.required
        ]],
        Sati: ['', [
          Validators.required
        ]],
        MinOsnov: ['', [
          Validators.required
        ]],
        MaxOsnov: ['', [
          Validators.required
        ]],
        Opis: []
      });


     }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Ažurianje radnika' : 'Novi radnik';

      if (!id)
        return;

      this.fnsatService.getFondSati(id)
        .subscribe(
          (pos) =>{
            if(pos.success){
              this.fnsatN = pos.data[0];
            }else{
              this.router.navigate(['NotFound']);
            }
          } ,
          error => {
            this.flashMessage.show(error, {
              cssClass: 'alert-danger',
              timeout: 9000});
            // if (error == 404 || error.status == 400 ) {
                this.router.navigate(['NotFound']);
            // }
          });
    });
  }


  save() {
    var result,
        FSValue = this.formFSAT.value;
      
    if (FSValue._id){
      result = this.fnsatService.updateFondSati(FSValue).subscribe(
        (pos) =>{
          if(pos.success){
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['fondsati'])
          }else{
            this.router.navigate(['NotFound']);
          }
        } ,
        error => {
          this.flashMessage.show(error, {
            cssClass: 'alert-danger',
            timeout: 9000});
        
         // console.log(" forma UPDATE  " + error);
         
        },
        
      );

    } else {

      this.fnsatService.addFondSati(FSValue)
      .subscribe(
        (pos) =>{
          if(pos.success){
            this.flashMessage.show(pos.message, {
              cssClass: 'alert-success',
              timeout: 5000});
              this.router.navigate(['fondsati'])
          }else{
            this.router.navigate(['NotFound']);
          }
        } ,
        error => {
          this.flashMessage.show(error, {
            cssClass: 'alert-danger',
            timeout: 9000});
          //console.log(" forma INSERT "  + error.toString()  + " ima li jos nesto" + error);
          
        },
        
      );
    }
  }




  backClicked(event: any) {
    this._location.back();
    //event.stopPropagation();
    
  }

  revert() { this.ngOnChanges(); }
  
  ngOnChanges() {
    this.formFSAT.reset({
      Mesec: "",
      Godina: "",
      Sati:"",
      MinOsnov:"",
      MaxOsnov:"",
      Opis:""
    });


}

}
