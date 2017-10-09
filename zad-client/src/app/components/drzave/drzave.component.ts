import { Component, OnInit } from '@angular/core';
import {DrzaveService} from '../../services/drzave/drzave.service';
import {Router} from '@angular/router';
import {IDrzave, Drzave} from './drzave.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';


@Component({
  selector: 'app-drzave',
  templateUrl: './drzave.component.html',
  styleUrls: ['./drzave.component.css']
})
export class DrzaveComponent implements OnInit {
  drzave:Array<IDrzave>;
  Title:string;
  selectedDrzave: Object;
  loading: boolean;
  drzava:IDrzave;
  displayDetals: boolean = false;
  drzShow: Drzave = new Drzave();
  
  constructor(private drzaveService:DrzaveService, private router:Router,private confirmationService: ConfirmationService) {
    this.Title="PREGLED DRŽAVA";
   }

  ngOnInit() {
    this.loading = true;
    setTimeout(()=>{
      this.drzaveService.getDrzave().subscribe(profile => {
        if (profile.success === true) { 
          this.drzave = profile.data;
        }
      },
      err => {
        console.log(err);
        return false;
      }
      
    );
    this.loading = false;
    },1000);
       
//  this.loading = false;
  
  } 

// onAddDrzavu() {
//     alert("Add drzavu");
// }

selectDrzavu( tdrz:Drzave) {
    // if (tId) {
    //     alert("Drzava je "  +tId);
    // } else {
    //     alert("Select" + this.selectedDrzave);
    // }
  // 
  this.displayDetals = true;
  // console.log(opstina);
  // console.log(this.selectedOpstina);
  this.drzShow = this.cloneData(tdrz); 

}


cloneData(c: Drzave):Drzave {
  let drzava = new Drzave();
  for(let prop in c) {
    drzava[prop] = c[prop];
  }
  return drzava;
}

addDrzave(){

  this.router.navigate(['drzave/new'])

}

updateDrzavu(id) {
  this.router.navigate(['drzave/', id]);
}


deleteDrzavu(tdrzava){
  // console.log(tdrzava);

  this.confirmationService.confirm({
    message: 'Are you sure that you want to perform this action?',
      accept: () => {
        //Actual logic to perform a confirmation
        var index = this.drzave.indexOf(tdrzava);
        console.log("index je " + index);
        this.drzave.splice(index, 1);
    
        this.drzaveService.delDrzava(tdrzava._id)
          .subscribe(null,
            err => {
              alert("Could not delete drzavu.");
              // Revert the view back to its original state
              this.drzave.splice(index, 0, tdrzava);
            });
      }
    });


  // // if (confirm("Are you sure you want to delete " + tdrzava.Naziv + "?")) {
  // //   var index = this.drzave.indexOf(tdrzava);
  // //   console.log("index je " + index);
  // //   this.drzave.splice(index, 1);

  // //   this.drzaveService.delDrzava(tdrzava._id)
  // //     .subscribe(null,
  // //       err => {
  // //         alert("Could not delete drzavu.");
  // //         // Revert the view back to its original state
  // //         this.drzave.splice(index, 0, tdrzava);
  // //       });
  }
}



// showDialogToAdd(tdrzava) {
//   //alert("Add");
//   console.log("Broj slogova u drzavama(pre brisanja) " + this.drzave.length);
//   var index = this.drzave.indexOf(tdrzava);
//   console.log("index je " + index);
//   this.drzave.splice(index, 1);

//   console.log("Broj slogova u drzavama(showDialogToAdd) " + this.drzave.length);
// }


//}

