
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ZanimanjaModel } from './zanimanja.model';
import { ZanimanjaService } from './zanimanja.service';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import {ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations' 
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-zanimanja',
  templateUrl: './zanimanja.component.html',
  styleUrls: ['./zanimanja.component.css'],
  animations: [routerTransition()]
})
export class ZanimanjaComponent implements OnInit {

  Title:string;
  selectedZan : ZanimanjaModel;
  zanimanja:Array<ZanimanjaModel>;
  displayDetals: boolean = false;
  zanShow: ZanimanjaModel = new ZanimanjaModel();

  constructor(private router:Router,private zanService:ZanimanjaService,
              private confirmationService: ConfirmationService,private flashMessage:FlashMessagesService ) {
    this.Title="PREGLED ZANIMANJA"; 
  }

  ngOnInit() {

    this.zanService.getZanimanja().subscribe(profile => {
      if (profile.success === true) { 
        // console.log(profile);
      //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
        this.zanimanja = profile.data;
      }
      
    },
    err => {
      console.log(err);
      return false;
    }
    
  );

  }


  
 selectPosao( work:ZanimanjaModel) {
  // this.selectedOpstina=opstina;  
   this.displayDetals = true;
   this.zanShow = this.cloneData(work);
  
}

cloneData(c: ZanimanjaModel):ZanimanjaModel {
  let work = new ZanimanjaModel();
  for(let prop in c) {
    work[prop] = c[prop];
  }
  return work;
 }


 addZnimanja(){
  this.router.navigate(['/zanimanja/new'])
 
 }
 
 updateZanimanja(id) {
  this.router.navigate(['/zanimanja/', id]);
 }

 deleteRadnik(tradnik){
  
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
        accept: () => {
          //Actual logic to perform a confirmation
          var index = this.zanimanja.indexOf(tradnik);
         // console.log("index je " + index);
          this.zanimanja.splice(index, 1);
      
          this.zanService.delZanimanje(tradnik._id)
            .subscribe((pos) =>{
              if(pos.success){
                 this.flashMessage.show('Zanimanje removed successfully ...', {
                    cssClass: 'alert-success',
                    timeout: 1000});
              }else{
                this.router.navigate(['NotFound']);
              }
              } ,
              err => {
                //alert("Could not delete radnik.");
                this.flashMessage.show('Could not delete zanimanje !!!', {
                  cssClass: 'alert-danger',
                  timeout: 5000});
                // Revert the view back to its original state
                this.zanimanja.splice(index, 0, tradnik);
              });
        }
      });
  
    
  }

}
