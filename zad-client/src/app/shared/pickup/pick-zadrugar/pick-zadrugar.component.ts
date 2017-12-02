import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PickZadrugarModel } from './../../../components/zadrugar/zadrugar-model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-pick-zadrugar',
  templateUrl: './pick-zadrugar.component.html',
  styleUrls: ['./pick-zadrugar.component.css']
})
export class PickZadrugarComponent implements OnInit {

  @Input('zadrL') public zadrL: Array<PickZadrugarModel> ;
  Title = 'ODABIR ZADRUGARA';
  selectedZadrugar: PickZadrugarModel;
  @Output() pickRow = new EventEmitter<PickZadrugarModel>();
  @Output() pickNothing = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  addZadrugar() {
    this.router.navigate(['/zadrugar/new']);
  }

  PickZadrugar() {
   // console.log('Pick iz PickZadrugar' + JSON.stringify(this.selectedZadrugar));
   if (this.selectedZadrugar) {
     if (this.selectedZadrugar._id) {
       this.pickRow.emit(this.selectedZadrugar);
     }
   }else {
    // console.log('saljem nista');
     this.pickNothing.emit(null);
   }

}

}
