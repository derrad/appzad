import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'kontaktpartner',
    templateUrl: './kontaktpartner.component.html'
})
export class KontaktPartnerComponent {
    // we will pass in kontakt from App component
    // tslint:disable-next-line:no-input-rename
    @Input('groupkontakt')
    public Kontakt: FormGroup;

}
