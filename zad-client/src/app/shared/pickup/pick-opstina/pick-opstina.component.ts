import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PickOpstine } from './../../../components/opstine/opstine.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pick-opstina',
  templateUrl: './pick-opstina.component.html',
  styleUrls: ['./pick-opstina.component.css']
})
export class PickOpstinaComponent implements OnInit {

  @Input('opstL') public opstL: Array<PickOpstine> ;
  Title = 'ODABIR OPŠTINE';
  selectedOpstina: PickOpstine;
  @Output() pickRow = new EventEmitter<PickOpstine>();
  @Output() pickNothing = new EventEmitter<any>();


  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  PickOpstina(event) {
    console.log('Pick drzava iz PickOpstinaComponent' + JSON.stringify(this.selectedOpstina));
   // this.displayDrz = false;
    if (this.selectedOpstina) {
      if (this.selectedOpstina._id) {
        this.pickRow.emit(this.selectedOpstina);
      }
    }else {
     // console.log('saljem nista');
      this.pickNothing.emit(null);
    }
  }

  addOpstine() {
    this.router.navigate(['opstine/new']);
  }

}
