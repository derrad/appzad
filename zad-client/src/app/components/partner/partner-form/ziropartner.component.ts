import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'ziropartner',
    templateUrl: './ziropartner.component.html'
})
export class ZiroPartnerComponent {
    // we will pass in ziro from App component
    // tslint:disable-next-line:no-input-rename
    @Input('groupziro')
    public Ziro: FormGroup;

}
