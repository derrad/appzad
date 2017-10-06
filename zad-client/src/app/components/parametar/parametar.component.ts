import {Component, OnInit } from '@angular/core';
import {ParametarService} from '../../services/opcijeapp/parametar.service';
import {Router} from '@angular/router';
import {IParametar} from './parametar.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import {FlashMessagesService} from 'angular2-flash-messages';


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
  
  
  constructor(private paramService:ParametarService, private router:Router,private flashMessage:FlashMessagesService) {
    this.Title="PREGLED PARAMETARA";
   }

  ngOnInit() {
    // let interval = setInterval(() => {
    //     this.valuekraj = this.valuekraj + Math.floor(Math.random() * 10) + 1;
    //     if(this.valuekraj >= 100) {
    //         this.valuekraj = 100;
    //          this.flashMessage.show('Success-Process Completed', {
    //           cssClass: 'alert-success',
    //           timeout: 2000});
    //         clearInterval(interval);
    //     }
    // }, 1000);

    this.loading = true;
    this.paramService.getParametars().subscribe(profile => {
      if (profile.success === true) { 
         
         this.params = profile.data;
        // console.log(this.params[0].Naziv);
        this.loading = false;
         this.flashMessage.show('Success-Process Completed', {
                     cssClass: 'alert-success',
                     timeout: 500});
         
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
    //alert("Add param");
    this.router.navigate(['parametar/new'])
}
updateParam(id) {
   this.router.navigate(['parametar/', id]);
}


deleteParam(tparam){
  // console.log(tdrzava);
  if (confirm("Are you sure you want to delete " + tparam.Naziv + "?")) {
    var index = this.params.indexOf(tparam);
    console.log("index je " + index);
    this.params.splice(index, 1);

    this.paramService.delParametar(tparam._id)
      .subscribe(null,
        err => {
          alert("Could not delete drzavu.");
          // Revert the view back to its original state
          this.params.splice(index, 0, tparam);
        });
  }
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
