import { Component, OnInit } from '@angular/core';
import { OpstineService } from './../../services/opstine/opstine.service';
import {Router} from '@angular/router';
import {Opstine} from './opstine.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';


@Component({
  selector: 'app-opstine',
  templateUrl: './opstine.component.html',
  styleUrls: ['./opstine.component.css']
})
export class OpstineComponent implements OnInit {
  Title:string;
  selectedOpstina : Opstine;
  loading: boolean;
  opstine:Array<Opstine>;
  displayDetals: boolean = false;
  opstShow: Opstine = new Opstine();


  constructor(private router:Router,private opstService:OpstineService,private confirmationService: ConfirmationService ) { 
    this.Title="PREGLED OPŠTINA";

  }

  ngOnInit() {

    this.loading = true;
    this.opstService.getOpstine().subscribe(profile => {
      if (profile.success === true) { 
        // console.log(profile);
         console.log(" data je " + profile.data[0].Drzava.Naziv);
        this.opstine = profile.data;
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



selectOpstina( opstina:Opstine) {
     // this.selectedOpstina=opstina;  
      this.displayDetals = true;
      // console.log(opstina);
      // console.log(this.selectedOpstina);
      this.opstShow = this.cloneData(opstina);
  //   if (tId) {
  //       alert("opstina je "  +tId);
  //   } else {
      //alert("Select" + this.selectedOpstina);
  //   }
  // //  

}

cloneData(c: Opstine):Opstine {
  let opstina = new Opstine();
  for(let prop in c) {
    opstina[prop] = c[prop];
  }
  return opstina;
}

addOpstine(){
  this.router.navigate(['opstine/new'])

}

updateOpstinu(id) {
  this.router.navigate(['opstine/', id]);
}


deleteOpstinu(topstina){
  // console.log(tdrzava);

  this.confirmationService.confirm({
    message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        var index = this.opstine.indexOf(topstina);
        console.log("index je " + index);
        this.opstine.splice(index, 1);
    
        this.opstService.delOpstine(topstina._id)
          .subscribe(null,
            err => {
              alert("Could not delete drzavu.");
              // Revert the view back to its original state
              this.opstine.splice(index, 0, topstina);
            });
      }
    });



  // if (confirm("Are you sure you want to delete " + topstina.Naziv + "?")) {
  //   var index = this.opstine.indexOf(topstina);
  //   console.log("index je " + index);
  //   this.opstine.splice(index, 1);

  //   this.opstService.delOpstine(topstina._id)
  //     .subscribe(null,
  //       err => {
  //         alert("Could not delete drzavu.");
  //         // Revert the view back to its original state
  //         this.opstine.splice(index, 0, topstina);
  //       });
  // }
}


}
