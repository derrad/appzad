import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Posao } from './../../posao/posao.model';
import { ZadrugarModel} from './../../zadrugar/zadrugar-model';

@Component({
  selector: 'app-uput-stavka',
  templateUrl: './uput-stavka.component.html',
  styleUrls: ['./uput-stavka.component.css']
})
export class UputStavkaComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input()
  public Stavke: FormGroup;

  @Input('zadrugarL')
  public zadrugarL: Array<ZadrugarModel>;

  @Input('poslL')
  public poslL: Array<Posao>;

  ngOnInit() {
   // console.log('Zadrugari su +' + JSON.stringify(this.zadrugarL));

  }
}
