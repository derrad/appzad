import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'telefonpartner',
    templateUrl: './telefonpartner.component.html'
})
export class TelefonPartnerComponent {
    // we will pass in telefon from App component
    // tslint:disable-next-line:no-input-rename
    @Input('grouptel')
    public Telefon: FormGroup;

}
