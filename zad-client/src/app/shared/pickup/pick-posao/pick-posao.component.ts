import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PickPosao } from './../../../components/posao/posao.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pick-posao',
  templateUrl: './pick-posao.component.html',
  styleUrls: ['./pick-posao.component.css']
})
export class PickPosaoComponent implements OnInit {

  @Input('poslL') public poslL: Array<PickPosao> ;
  Title = 'ODABIR POSLA';
  selectedPosao: PickPosao;
  @Output() pickRow = new EventEmitter<PickPosao>();
  @Output() pickNothing = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addPosao() {
    this.router.navigate(['/posao/new']);
  }

  PickPosao() {
     // console.log('Pick iz PickKupac' + JSON.stringify(this.selectedKupac));
     if (this.selectedPosao) {
       if (this.selectedPosao._id) {
         this.pickRow.emit(this.selectedPosao);
       }
     }else {
      // console.log('saljem nista');
       this.pickNothing.emit(null);
     }

  }

}
