import {Component, OnInit } from '@angular/core';
import {ParametarService} from '../../services/opcijeapp/parametar.service';
import {Router} from '@angular/router';
import {IParametar} from './parametar.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';


@Component({
  selector: 'app-parametar',
  templateUrl: './parametar.component.html',
  styleUrls: ['./parametar.component.css']
})
export class ParametarComponent implements OnInit {
  params:Array<IParametar>;
  Title:string;
  selectedParam: Object;
  loading: boolean;
  
  
  constructor(private paramService:ParametarService, private router:Router) {
    this.Title="PREGLED PARAMETARA";
   }

  ngOnInit() {
    this.loading = true;
    this.paramService.getParametars().subscribe(profile => {
      if (profile.success === true) { 
         
         this.params = profile.data;
         console.log(this.params[0].Naziv);
         this.loading = false;
      }
      
    },
    err => {
      console.log(err);
      return false;
    }
    
  );
  this.loading = false;
  }

  onAddParam() {
    alert("Add param");
}

selectParam( tId: string) {
    if (tId) {
        alert("Param id je "  + tId);
    } else {
        alert("Select" + this.selectedParam);
    }
  //  

}

showDialogToAdd() {
    alert("Add");
}

}
