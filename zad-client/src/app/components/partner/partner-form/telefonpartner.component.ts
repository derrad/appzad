import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'telefonpartner',
    templateUrl: './telefonpartner.component.html'
})
export class TelefonPartnerComponent {
    // we will pass in telefon from App component
    @Input('grouptel')
    public Telefon: FormGroup;
   
}