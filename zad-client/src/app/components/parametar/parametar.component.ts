import {Component, OnInit } from '@angular/core';
import {ParametarService} from './parametar.service';
import {Router} from '@angular/router';
import {IParametar,Parametar} from './parametar.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {routerTransition } from '../../animation/router.animations' 
//import * as $ from 'jquery';


@Component({
  selector: 'app-parametar',
  templateUrl: './parametar.component.html',
  styleUrls: ['./parametar.component.css'],
  animations: [routerTransition()]
})
export class ParametarComponent implements OnInit {
  params:Array<IParametar>;
  Title:string;
  selectedParam: Object;
  loading: boolean;
  valuekraj: number = 0;
  displayDetals: boolean = false;
  parShow: Parametar = new Parametar();
  
  
  constructor(private paramService:ParametarService, private router:Router,
    private confirmationService: ConfirmationService,private flashMessage:FlashMessagesService ) {
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
    message: `Jeste li sigurni da želite uklonite izabrani podatak ?   ` ,
    header: `${tparam.Naziv}`,
      accept: () => {
        //Actual logic to perform a confirmation
        var index = this.params.indexOf(tparam);
       // console.log("index je " + index);
        this.params.splice(index, 1);
    
        this.paramService.delParametar(tparam._id)
          .subscribe((pos) =>{
            if(pos.success){
               this.flashMessage.show(pos.message ,{
                  cssClass: 'alert-success',
                  timeout: 1000});
            }else{
              this.router.navigate(['NotFound']);
            }
            } ,
            err => {
              //alert("Could not delete radnik.");
              this.flashMessage.show('Could not delete parametar !!!', {
                cssClass: 'alert-danger',
                timeout: 5000});
              // Revert the view back to its original state
              this.params.splice(index, 0, tparam);
            });
      }
    });

}


 selectParam( tprm: Parametar) {
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

}
