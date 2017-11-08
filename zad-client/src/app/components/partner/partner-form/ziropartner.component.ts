import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'ziropartner',
    templateUrl: './ziropartner.component.html'
})
export class ZiroPartnerComponent {
    // we will pass in ziro from App component
    @Input('groupziro')
    public Ziro: FormGroup;
   
}