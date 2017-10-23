import { Message } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';
import { routerTransition } from '../../../animation/router.animations' 
import { ZanimanjaModel } from './../zanimanja.model';
import { ZanimanjaService} from './../zanimanja.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {StepenSS} from './../../../shared/EnumApp/StepenSS.enum';

@Component({
  selector: 'app-zanimanja-form',
  templateUrl: './zanimanja-form.component.html',
  styleUrls: ['./zanimanja-form.component.css'],
  animations: [routerTransition()]
})
export class ZanimanjaFormComponent implements OnInit {
  formZAN: FormGroup;
  title: string;
  zanimN : ZanimanjaModel = new ZanimanjaModel();
  strSprema = StepenSS;

  constructor(private zanService:ZanimanjaService, private router:Router,private route: ActivatedRoute, 
    formBuilder: FormBuilder ,private _location: Location,private flashMessage:FlashMessagesService) {
      
      this.formZAN = formBuilder.group({
        _id:[],
        Sifra:['',[Validators.required]],
        Naziv: ['', [
          Validators.required
        ]],
        StepenSS: ['', [
          Validators.required
        ]],
        Opis: []
      });
  }


  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Ažuriranje zanimanja' : 'Novo zanimanje';

      if (!id)
        return;

      this.zanService.getZanimanje(id)
        .subscribe(
          (pos) =>{
            if(pos.success){
              this.zanimN = pos.data[0];
            }else{
              this.router.navigate(['NotFound']);
            }
          } ,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });
  }


  backClicked(event: any) {
    this._location.back();
    //event.stopPropagation();
    
  }

  save() {
    var result,
        zanValue = this.formZAN.value;

      
    if (zanValue._id){
      result = this.zanService.updateZanimanje(zanValue);
    } else {
      result = this.zanService.addZanimanje(zanValue);
    }

    result.subscribe(data => this.router.navigate(['zanimanja']));
  }



  revert() { this.ngOnChanges(); }
  
  ngOnChanges() {
    this.formZAN.reset({
      Sifra:"",
      Naziv: "",
      StepenSS:"",
      Opis:""
    });

}

}
