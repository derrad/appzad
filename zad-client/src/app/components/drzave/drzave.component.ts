import { Component, OnInit } from '@angular/core';
import {DrzaveService} from '../../services/drzave/drzave.service';
import {Router} from '@angular/router';
import {IDrzave} from './drzave.model'
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { Header } from 'primeng/primeng';
import { Footer } from 'primeng/primeng';



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
  
  
  constructor(private drzaveService:DrzaveService, private router:Router) {
    this.Title="PREGLED DRŽAVA";
   }

  ngOnInit() {
    this.loading = true;
    this.drzaveService.getDrzave().subscribe(profile => {
      if (profile.success === true) { 
        // console.log(profile);
        // console.log(" data je " + profile.data);
        this.drzave = profile.data;
        console.log(this.drzave[0].Naziv);
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

  onAddDrzavu() {
    alert("Add drzavu");
}

selectDrzavu( tId: string) {
    if (tId) {
        alert("Drzava je "  +tId);
    } else {
        alert("Select" + this.selectedDrzave);
    }
  //  

}


showDialogToAdd() {
    alert("Add");
}


}
