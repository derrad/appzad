import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'partadresa',
    templateUrl: './padresa.component.html'
})
export class PadresaComponent {
    // we will pass in ziro from App component
    // tslint:disable-next-line:no-input-rename
    @Input('groupadresa')
    public Adresa: FormGroup;

}
