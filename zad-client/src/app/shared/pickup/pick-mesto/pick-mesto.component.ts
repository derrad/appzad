import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PickMesta } from './../../../components/mesta/mesta.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pick-mesto',
  templateUrl: './pick-mesto.component.html',
  styleUrls: ['./pick-mesto.component.css']
})
export class PickMestoComponent implements OnInit {

  @Input('mestaL') public mestaL: Array<PickMesta> ;
  Title = 'ODABIR MESTA';
  selectedMesto: PickMesta;
  @Output() pickRow = new EventEmitter<PickMesta>();
  @Output() pickNothing = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }


  PickMesto(event) {
    console.log('Pick mesto iz PickMestaComponent' + JSON.stringify(this.selectedMesto));
   // this.displayDrz = false;
    if (this.selectedMesto) {
      if (this.selectedMesto._id) {
        this.pickRow.emit(this.selectedMesto);
      }
    }else {
     // console.log('saljem nista');
      this.pickNothing.emit(null);
    }
  }



  addMesta() {
    this.router.navigate(['/mesta/new']);
  }

}
