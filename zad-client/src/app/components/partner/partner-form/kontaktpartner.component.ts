import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'kontaktpartner',
    templateUrl: './kontaktpartner.component.html'
})
export class KontaktPartnerComponent {
    // we will pass in kontakt from App component
    @Input('groupkontakt')
    public Kontakt: FormGroup;

}
