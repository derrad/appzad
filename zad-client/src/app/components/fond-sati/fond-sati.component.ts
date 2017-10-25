import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { DialogModule} from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations' 
import { FlashMessagesService } from 'angular2-flash-messages';
import { FondSatiService } from './fond-sati.service';
import { FondSati } from './fondsati.model';


@Component({
  selector: 'app-fond-sati',
  templateUrl: './fond-sati.component.html',
  styleUrls: ['./fond-sati.component.css'],
  animations: [routerTransition()]
  
})
export class FondSatiComponent implements OnInit {
  Title:string;
  selectedFnSati: FondSati;
  fnsati: Array<FondSati>;
  displayDetals: boolean = false;
  fsatiShow: FondSati = new FondSati();


  constructor(private router:Router,private fnsatiService:FondSatiService,
    private confirmationService: ConfirmationService,private flashMessage:FlashMessagesService ) {
    this.Title="PREGLED FONDA SATI"; 
}


  ngOnInit() {
    this.fnsatiService.getFondSate().subscribe(profile => {
      if (profile.success === true) { 
         //console.log(profile);
      //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
        this.fnsati = profile.data;
      }
    },
    err => {
      console.log(err);
      return false;
    }
  );

  }



  selectItem( work:FondSati) {
    // this.selectedOpstina=opstina;  
     this.displayDetals = true;
     this.fsatiShow = this.cloneData(work);
    
  }
  
  cloneData(c: FondSati):FondSati {
    let work = new FondSati();
    for(let prop in c) {
      work[prop] = c[prop];
    }
    return work;
   }

   addFSati(){
    this.router.navigate(['/fondsati/new'])
   
   }
   
   updateFSati(id) {
    this.router.navigate(['/fondsati/', id]);
   }

   deleteFSati(tfnsati){
    
      this.confirmationService.confirm({
        message: 'Are you sure that you want to perform this action?',
          accept: () => {
            //Actual logic to perform a confirmation
            var index = this.fnsati.indexOf(tfnsati);
           // console.log("index je " + index);
            this.fnsati.splice(index, 1);
        
            this.fnsatiService.delFondSati(tfnsati._id)
              .subscribe((pos) =>{
                if(pos.success){
                   this.flashMessage.show('Radnik removed successfully ...', {
                      cssClass: 'alert-success',
                      timeout: 1000});
                }else{
                  this.router.navigate(['NotFound']);
                }
                } ,
                err => {
                  //alert("Could not delete radnik.");
                  this.flashMessage.show('Could not delete radnik !!!', {
                    cssClass: 'alert-danger',
                    timeout: 5000});
                  // Revert the view back to its original state
                  this.fnsati.splice(index, 0, tfnsati);
                });
          }
        });
    
      
    }
  



}
