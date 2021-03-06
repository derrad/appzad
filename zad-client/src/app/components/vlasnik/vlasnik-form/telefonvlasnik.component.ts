import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-telefon-vlasnik',
    templateUrl: './telefonvlasnik.component.html'
})
export class TelefonVlasnikComponent {
    // we will pass in telefon from App component
    // tslint:disable-next-line:no-input-rename
    @Input('group')
    public telefForm: FormGroup;
}
