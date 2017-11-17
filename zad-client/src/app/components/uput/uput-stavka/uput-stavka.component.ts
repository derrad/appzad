import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-uput-stavka',
  templateUrl: './uput-stavka.component.html',
  styleUrls: ['./uput-stavka.component.css']
})
export class UputStavkaComponent  {
  // tslint:disable-next-line:no-input-rename
  @Input('stavke')
  public stavkeForm: FormGroup;

}
