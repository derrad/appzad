import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'app-zadrugar-adresa',
    templateUrl: './zadruga-adresa.component.html'
})
export class ZadrugarAdresaComponent {
    // we will pass in ziro from App component
    // tslint:disable-next-line:no-input-rename
    @Input('groupAdresa')
    public Adresa: FormGroup;
}
