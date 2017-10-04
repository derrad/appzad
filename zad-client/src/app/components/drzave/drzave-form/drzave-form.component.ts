import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {Drzave} from '../drzave.model';
import {DrzaveService} from '../../../services/drzave/drzave.service';

@Component({
  selector: 'app-drzave-form',
  templateUrl: './drzave-form.component.html',
  styleUrls: ['./drzave-form.component.css']
})
export class DrzaveFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  drzava: Drzave = new Drzave();

  constructor(private drzaveService:DrzaveService, private router:Router,private route: ActivatedRoute, formBuilder: FormBuilder,) { 

    this.form = formBuilder.group({
      KodDrzave: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3)
      ]],
      Naziv: ['', [
        Validators.required
      ]],
      Opis: []
    });


  }

  ngOnInit() {


    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Edit Država' : 'New Država';

      if (!id)
        return;

      this.drzaveService.getDrzava(id)
        .subscribe(
          drzava => this.drzava = drzava,
          response => {
            if (response.status == 404) {
              this.router.navigate(['NotFound']);
            }
          });
    });

  }



  save() {
    var result,
        drzaveValue = this.form.value;

    if (drzaveValue._id){
      result = this.drzaveService.updateDrzava(drzaveValue);
    } else {
      result = this.drzaveService.addDrzava(drzaveValue);
    }

    result.subscribe(data => this.router.navigate(['drzave']));
  }


}
