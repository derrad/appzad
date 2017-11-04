import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'telefonvlasnik',
    templateUrl: './telefonvlasnik.component.html'
})
export class TelefonVlasnikComponent {
    // we will pass in telefon from App component
    @Input('group')
    public telefForm: FormGroup;
   
}