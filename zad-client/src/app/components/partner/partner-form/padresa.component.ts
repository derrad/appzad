import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'partadresa',
    templateUrl: './padresa.component.html'
})
export class PadresaComponent {
    // we will pass in ziro from App component
    @Input('groupadresa')
    public adresaForm: FormGroup;
   
}