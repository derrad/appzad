import { Component, OnInit } from '@angular/core';
import { OpstineService } from './opstine.service';
import {Router} from '@angular/router';
import {Opstine} from './opstine.model';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-opstine',
  templateUrl: './opstine.component.html',
  styleUrls: ['./opstine.component.css']
})
export class OpstineComponent implements OnInit {
  Title: string;
  selectedOpstina: Opstine;
  opstineL: Array<Opstine>;
  displayDetals = false;
  opstShow: Opstine = new Opstine();


  constructor(private router: Router, private opstService: OpstineService,
              private confirmationService: ConfirmationService, private flashMessage: FlashMessagesService) {
    this.Title = '"PREGLED OPŠTINA';

  }

  ngOnInit() {

  
    this.opstService.getOpstine().subscribe(profile => {
      if (profile.success === true) { 
          // console.log(profile);
    //       console.log(" data je " + profile.data[0].Drzava.Naziv);
          this.opstineL = profile.data;
      }
    },
    err => {
      console.log(err);
      return false;
    }
    
  );
 
  }



selectOpstina( opstina:Opstine) {
    this.displayDetals = true;
    this.opstShow = this.cloneData(opstina);
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


//deleteOpstinu(topstina){
  // console.log(tdrzava);

  // this.confirmationService.confirm({
  //   message: 'Are you sure that you want to perform this action?',
  //     accept: () => {
  //       //Actual logic to perform a confirmation
  //       var index = this.opstine.indexOf(topstina);
  //       console.log("index je " + index);
  //       this.opstine.splice(index, 1);
    
  //       this.opstService.delOpstine(topstina._id)
  //         .subscribe(null,
  //           err => {
  //             alert("Could not delete drzavu.");
  //             // Revert the view back to its original state
  //             this.opstine.splice(index, 0, topstina);
  //           });
  //     }
  //   });



deleteOpstinu(tOpstine){
    this.confirmationService.confirm({
        message: `Jeste li sigurni da želite uklonite izabranu opštinu ?   ` ,
        header: `${tOpstine.Naziv}`,
          accept: () => {
            //Actual logic to perform a confirmation
            var index = this.opstineL.indexOf(tOpstine);
          // console.log("index je " + index);
            this.opstineL.splice(index, 1);
        
            this.opstService.delOpstine(tOpstine._id)
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
                  this.flashMessage.show('Could not delete opštinu !!!', {
                    cssClass: 'alert-danger',
                    timeout: 5000});
                  // Revert the view back to its original state
                  this.opstineL.splice(index, 0, tOpstine);
                });
          }
        });
}


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



