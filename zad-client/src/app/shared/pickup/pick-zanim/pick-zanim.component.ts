import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PickZanimanjaModel } from './../../../components/zanimanja/zanimanja.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pick-zanim',
  templateUrl: './pick-zanim.component.html',
  styleUrls: ['./pick-zanim.component.css']
})
export class PickZanimComponent implements OnInit {

  @Input('zanL') public zanL: Array<PickZanimanjaModel> ;
  Title = 'ODABIR ZANIMANJA';
  selectedZan: PickZanimanjaModel;
  @Output() pickRow = new EventEmitter<PickZanimanjaModel>();
  @Output() pickNothing = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addZanimanja() {
    this.router.navigate(['/zanimanja/new']);
   }

  PickZanim() {
     // console.log('Pick iz PickZanimComponent' + JSON.stringify(this.selectedZan));
     if (this.selectedZan) {
       if (this.selectedZan._id) {
         this.pickRow.emit(this.selectedZan);
       }
     }else {
      // console.log('saljem nista');
       this.pickNothing.emit(null);
     }

  }

}
