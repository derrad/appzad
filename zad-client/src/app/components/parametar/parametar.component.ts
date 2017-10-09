import {Component, OnInit } from '@angular/core';
import {ParametarService} from '../../services/opcijeapp/parametar.service';
import {Router} from '@angular/router';
import {IParametar,Parametar} from './parametar.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
//import {FlashMessagesService} from 'angular2-flash-messages';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
//import * as $ from 'jquery';


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
  valuekraj: number = 0;
  displayDetals: boolean = false;
  parShow: Parametar = new Parametar();
  
  
  constructor(private paramService:ParametarService, private router:Router,private confirmationService: ConfirmationService) {
    this.Title="PREGLED PARAMETARA";
   }

  ngOnInit() {
    this.loading = true;
    this.paramService.getParametars().subscribe(profile => {
      if (profile.success === true) { 
          this.params = profile.data;
          this.loading = false;
      }
    },
    err => {
      console.log(err);
      return false;
    }
    
  );
   this.loading = false;
    //$("#glparam").show(1000);
  }


onAddParam() {
    //alert("Add param");
    this.router.navigate(['parametar/new'])
}
updateParam(id) {
   this.router.navigate(['parametar/', id]);
}


deleteParam(tparam){
  // console.log(tdrzava);

  this.confirmationService.confirm({
    message: 'Are you sure that you want to perform this action?',
      accept: () => {
          var index = this.params.indexOf(tparam);
          this.params.splice(index, 1);
           this.paramService.delParametar(tparam._id)
            .subscribe(null,
              err => {
                alert("Could not delete param.");
                // Revert the view back to its original state
                this.params.splice(index, 0, tparam);
              });

        }
      }
    );
}


 selectParam( tprm: Parametar) {
  //   if (tId) {
 //       alert("Param id je "  + tId);
// //     } else {
// //         alert("Select" + this.selectedParam);
// //     }
// //   //  
  this.displayDetals = true;
  this.parShow = this.cloneData(tprm); 
 } 

 cloneData(c: Parametar):Parametar {
  let prmdata = new Parametar();
  for(let prop in c) {
    prmdata[prop] = c[prop];
  }
  return prmdata;
}

// showDialogToAdd() {
//     alert("Add");
// }

}
