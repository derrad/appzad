import { Component, OnInit } from '@angular/core';
import { MestaService } from './../../services/mesta/mesta.service';
import {Router} from '@angular/router';
import { Mesta } from './mesta.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations' 

@Component({
  selector: 'app-mesta',
  templateUrl: './mesta.component.html',
  styleUrls: ['./mesta.component.css'],
  animations: [routerTransition()]
})
export class MestaComponent implements OnInit {
  Title:string;
  selectedMesto : Mesta;
  loading: boolean;
  mesta:Array<Mesta>;
  displayDetals: boolean = false;
  mesShow: Mesta = new Mesta();

  constructor(private router:Router,private mestaService:MestaService,private confirmationService: ConfirmationService ) {
    this.Title="PREGLED MESTA";

   }

  ngOnInit() {

    this.loading = true;
    this.mestaService.getMesta().subscribe(profile => {
      if (profile.success === true) { 
        // console.log(profile);
      //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
        this.mesta = profile.data;
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



selectMesto( mesto:Mesta) {
    // this.selectedOpstina=opstina;  
     this.displayDetals = true;
     // console.log(" dobio" + mesto.Opstina);
     // console.log(this.selectedOpstina);
     this.mesShow = this.cloneData(mesto);
    //console.log(" klonirao" + this.mesShow.Opstina);
 //   if (tId) {
 //       alert("opstina je "  +tId);
 //   } else {
     //alert("Select" + this.selectedOpstina);
 //   }
 // //  

}

cloneData(c: Mesta):Mesta {
 let mesto = new Mesta();
 for(let prop in c) {
  mesto[prop] = c[prop];
 }
 return mesto;
}

addMesta(){
 this.router.navigate(['/mesta/new'])

}

updateMesta(id) {
 this.router.navigate(['/mesta/', id]);
}


deleteMesto(tmesto){
  // console.log(tdrzava);

  this.confirmationService.confirm({
    message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        var index = this.mesta.indexOf(tmesto);
       // console.log("index je " + index);
        this.mesta.splice(index, 1);
    
        this.mestaService.delMesto(tmesto._id)
          .subscribe(null,
            err => {
              alert("Could not delete mesto.");
              // Revert the view back to its original state
              this.mesta.splice(index, 0, tmesto);
            });
      }
    });

  
}



}
