import { Message } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Parametar} from '../parametar.model';
import {ParametarService} from '../../../services/opcijeapp/parametar.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-parmetar-form',
  templateUrl: './parmetar-form.component.html',
  styleUrls: ['./parmetar-form.component.css']
  
})
export class ParmetarFormComponent implements OnInit {

  frParam: FormGroup;
  title: string;
  parametar: Parametar = new Parametar();

  constructor(private router:Router,private route: ActivatedRoute, 
              formBuilder: FormBuilder,private paramService:ParametarService,
              private _location: Location) { 

    this.frParam = formBuilder.group({
      _id:[],
      Naziv: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]],
      Koristi:[],
      VredString:[],
      VredNumeric:[],
      Opis: []
    });


  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
    var id = params['id'];
    this.title = id ? 'Edit Parametar' : 'ADD Parametar';

      if (!id)
        return;

      this.paramService.getParametar(id)
        .subscribe(
        (param) => {
          console.log(param);
          if(param.success){
            this.parametar = param.data[0];
          }else{
            this.router.navigate(['NotFound']);
          }
          
        
        },
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
        paramValue = this.frParam.value;

    if (paramValue._id){
      console.log("usao u parametar");
      result = this.paramService.updateParametar(paramValue);
    } else {
      try{
        result = this.paramService.addParametar(paramValue);
      }catch(er){
        console.log("SAVE KOD ADD catch error" + er.Message); 
      }
      
      if (result) {
        console.log("SAVE KOD ADD" + result) ;
      }
    }

    result.subscribe(data => this.router.navigate(['parametar']));
  }



}
