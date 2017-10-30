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
import { VlasnikService } from './vlasnik.service';
import { VlasnikModel } from './vlasnik-model';
import { ResponeCustom}  from './../../shared/models/ErrorRes';

@Component({
  selector: 'app-vlasnik',
  templateUrl: './vlasnik.component.html',
  styleUrls: ['./vlasnik.component.css'],
  animations: [routerTransition()]
})
export class VlasnikComponent implements OnInit {

  Title:string;
  selectedVlasn: VlasnikModel;
  vlasnL: Array<VlasnikModel>;
  displayDetals: boolean = false;
  vlasnShow: VlasnikModel = new VlasnikModel();

  constructor(private router:Router,private vlasnService:VlasnikService,
    private confirmationService: ConfirmationService,private flashMessage:FlashMessagesService ) {
    this.Title="PREGLED VLASNIKA"; 
}

  ngOnInit() {

    this.vlasnService.getVlasn()
      .subscribe((profile) => {
      if (profile.success === true) { 
        this.vlasnL= profile.data;
      }
      // }
      },
      (error:ResponeCustom) => {
      this.flashMessage.show(error.message, {
      cssClass: 'alert-danger',
      timeout: 9000});
      console.log(error.message);
      this.vlasnL=[];

      return false;
      }
    );

  }

  selectItem( work:VlasnikModel) {
    // this.selectedOpstina=opstina;  
     this.displayDetals = true;
     this.vlasnShow = this.cloneData(work);
    
  }
  
  cloneData(c: VlasnikModel):VlasnikModel {
    let work = new VlasnikModel();
    for(let prop in c) {
      work[prop] = c[prop];
    }
    return work;
   }
  
   addVlasnik(){
    this.router.navigate(['/vlasnik/new'])
   
   }
   
   updateVasnik(id) {
    this.router.navigate(['/vlasnik/', id]);
   }

   deleteKonst(tvlasn){
    
      this.confirmationService.confirm({
        message: `Jeste li sigurni da želite uklonite izabrani podatak ?   ` ,
        header: `${tvlasn.Ime}`,
          accept: () => {
            //Actual logic to perform a confirmation
            var index = this.vlasnL.indexOf(tvlasn);
           // console.log("index je " + index);
            this.vlasnL.splice(index, 1);
        
            this.vlasnService.delVlasnik(tvlasn._id)
              .subscribe((pos) =>{
                if(pos.success){
                   this.flashMessage.show(pos.message ,{
                      cssClass: 'alert-success',
                      timeout: 1000});
                }else{
                  this.router.navigate(['NotFound']);
                }
                } ,
                (error:ResponeCustom)  => {
                  //alert("Could not delete radnik.");
                  this.flashMessage.show(error.message, {
                    cssClass: 'alert-danger',
                    timeout: 5000});
                  // Revert the view back to its original state
                  this.vlasnL.splice(index, 0, tvlasn);
                });
          }
        });
    
      
    }
  

}
