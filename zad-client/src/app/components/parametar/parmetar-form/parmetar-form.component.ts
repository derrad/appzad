import { Message } from 'primeng/components/common/api';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Parametar} from '../parametar.model';
import {ParametarService} from '../../../services/opcijeapp/parametar.service';

@Component({
  selector: 'app-parmetar-form',
  templateUrl: './parmetar-form.component.html',
  styleUrls: ['./parmetar-form.component.css']
})
export class ParmetarFormComponent implements OnInit {

  frParam: FormGroup;
  title: string;
  parametar: Parametar = new Parametar();

  constructor(private router:Router,private route: ActivatedRoute, formBuilder: FormBuilder,private paramService:ParametarService) { 

    this.frParam = formBuilder.group({
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
    this.title = id ? 'Edit Parametar' : 'New Parametar';

      if (!id)
        return;

      this.paramService.getParametar(id)
        .subscribe(
          param => this.parametar = param,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });

  }

  save() {
    var result,
        paramValue = this.frParam.value;

    if (paramValue._id){
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
