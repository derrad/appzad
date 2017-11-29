import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, AfterViewInit} from '@angular/core';
import {PickDrzave} from './../../../components/drzave/drzave.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pick-drzava',
  templateUrl: './pick-drzava.component.html',
  styleUrls: ['./pick-drzava.component.css']
})
export class PickDrzavaComponent implements OnInit, AfterViewInit {

  @Input('drzL') public drzL: Array<PickDrzave> ;
  Title = 'ODABIR DRŽAVE';
 // displayDrz = false;
  selectedDrzava: PickDrzave;
  @ViewChildren('input') searchinput;
  @Output() pickRow = new EventEmitter<PickDrzave>();
  @Output() pickNothing = new EventEmitter<any>();

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.searchinput.changes.subscribe(elements => {

      // elements.last.nativeElement.focus();
      // elements.first.nativeElement.focus();
  });
  }

  PickDrzava(event) {
    console.log('Pick drzava iz PickDrzavaComponent' + JSON.stringify(this.selectedDrzava));
   // this.displayDrz = false;
    if (this.selectedDrzava) {
      if (this.selectedDrzava._id) {
        this.pickRow.emit(this.selectedDrzava);
      }
    }else {
      console.log('saljem nista');
      this.pickNothing.emit(null);
    }
  }

  addDrzave() {
    this.router.navigate(['drzave/new']);
  }

}
