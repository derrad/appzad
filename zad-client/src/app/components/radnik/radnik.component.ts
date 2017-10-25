import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Radnik } from './radnik.model';
import { RadnikService} from './radnik.service';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';
import { ConfirmDialogModule,ConfirmationService} from 'primeng/primeng';
import { DialogModule} from 'primeng/primeng';
import { routerTransition } from '../../animation/router.animations' 
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-radnik',
  templateUrl: './radnik.component.html',
  styleUrls: ['./radnik.component.css'],
  animations: [routerTransition()]
})
export class RadnikComponent implements OnInit {

  Title:string;
  selectedRadnik : Radnik;
  radnici:Array<Radnik>;
  displayDetals: boolean = false;
  radShow: Radnik = new Radnik();

  constructor(private router:Router,private radService:RadnikService,
              private confirmationService: ConfirmationService,private flashMessage:FlashMessagesService ) {
    this.Title="PREGLED RADNIKA"; 
  }

  ngOnInit() {
    this.radService.getRadnici().subscribe(profile => {
      if (profile.success === true) { 
         //console.log(profile);
      //   console.log(" data je " + profile.data[0].Opstina.Naziv + "  drzava" + profile.data[0].Opstina.Drzava.Naziv);
        this.radnici = profile.data;
      }
    },
    err => {
      console.log(err);
      return false;
    }
  );
  }

  selectRadnik( work:Radnik) {
    // this.selectedOpstina=opstina;  
     this.displayDetals = true;
     this.radShow = this.cloneData(work);
    
  }
  
  cloneData(c: Radnik):Radnik {
    let work = new Radnik();
    for(let prop in c) {
      work[prop] = c[prop];
    }
    return work;
   }


 addRadnik(){
  this.router.navigate(['/radnik/new'])
 
 }
 
 updateRadnik(id) {
  this.router.navigate(['/radnik/', id]);
 }
 

 deleteRadnik(tradnik){
  
    this.confirmationService.confirm({
      message: `Jeste li sigurni da želite uklonite izabranog radnika ?   ` ,
      header: `${tradnik.Prezime} ${tradnik.Ime}`,
        accept: () => {
          //Actual logic to perform a confirmation
          var index = this.radnici.indexOf(tradnik);
         // console.log("index je " + index);
          this.radnici.splice(index, 1);
      
          this.radService.delRadnik(tradnik._id)
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
                this.radnici.splice(index, 0, tradnik);
              });
        }
      });
  
    
  }


}
