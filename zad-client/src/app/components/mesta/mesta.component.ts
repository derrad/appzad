import { Component, OnInit } from '@angular/core';
import { MestaService } from './mesta.service';
import {Router} from '@angular/router';
import { Mesta } from './mesta.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations' 
import {FlashMessagesService} from 'angular2-flash-messages';

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
  mestaL:Array<Mesta>;
  displayDetals: boolean = false;
  mesShow: Mesta = new Mesta();

  constructor(private router:Router,private mestaService:MestaService,
              private confirmationService: ConfirmationService,private flashMessage:FlashMessagesService  ) {
    this.Title="PREGLED MESTA";

   }

  ngOnInit() {

    this.mestaService.getMesta().subscribe(profile => {
      if (profile.success === true) { 
         //console.log(profile.data);
      //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
        this.mestaL = profile.data;

      }
    },
    err => {
      console.log(err);
      return false;
    }
    
  );
  }



selectMesto( mesto:Mesta) {
     this.displayDetals = true;
     this.mesShow = this.cloneData(mesto);
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


// deleteMesto(tmesto){
//   // console.log(tdrzava);

//   this.confirmationService.confirm({
//     message: 'Are you sure that you want to perform this action?',
//       accept: () => {
//         //Actual logic to perform a confirmation
//         var index = this.mestaL.indexOf(tmesto);
//        // console.log("index je " + index);
//         this.mestaL.splice(index, 1);
    
//         this.mestaService.delMesto(tmesto._id)
//           .subscribe(null,
//             err => {
//               alert("Could not delete mesto.");
//               // Revert the view back to its original state
//               this.mestaL.splice(index, 0, tmesto);
//             });
//       }
//     });

  
// }

deleteMesto(tmesto){
  this.confirmationService.confirm({
     message: `Jeste li sigurni da želite uklonite izabrano mesto ?   ` ,
     header: `${tmesto.Naziv}`,
       accept: () => {
         //Actual logic to perform a confirmation
         var index = this.mestaL.indexOf(tmesto);
        // console.log("index je " + index);
         this.mestaL.splice(index, 1);
     
         this.mestaService.delMesto(tmesto._id)
           .subscribe((pos) =>{
             if(pos.success){
                this.flashMessage.show(pos.message, {
                   cssClass: 'alert-success',
                   timeout: 1000});
             }else{
               this.router.navigate(['NotFound']);
             }
             } ,
             err => {
               //alert("Could not delete radnik.");
               this.flashMessage.show('Could not delete mesto !!!', {
                 cssClass: 'alert-danger',
                 timeout: 5000});
               // Revert the view back to its original state
               this.mestaL.splice(index, 0, tmesto);
             });
       }
     });
 }



}
