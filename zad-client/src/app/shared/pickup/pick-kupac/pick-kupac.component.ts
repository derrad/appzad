import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PickPartnerModel } from './../../../components/partner/partner-model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pick-kupac',
  templateUrl: './pick-kupac.component.html',
  styleUrls: ['./pick-kupac.component.css']
})
export class PickKupacComponent implements OnInit {


  @Input('kupacL') public kupacL: Array<PickPartnerModel> ;
  Title = 'ODABIR KUPCA';
  selectedKupac: PickPartnerModel;
  @Output() pickRow = new EventEmitter<PickPartnerModel>();
  @Output() pickNothing = new EventEmitter<any>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  addPartner() {
    this.router.navigate(['/partner/new']);
  }

  PickKupac() {
      console.log('Pick iz PickKupac' + JSON.stringify(this.selectedKupac));
     if (this.selectedKupac) {
       if (this.selectedKupac._id) {
         this.pickRow.emit(this.selectedKupac);
       }
     }else {
      // console.log('saljem nista');
       this.pickNothing.emit(null);
     }

  }
}
