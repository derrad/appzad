import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-ziro-vlasnik',
    templateUrl: './zirovlasnik.component.html'
})
export class ZiroVlasnikComponent {
    // we will pass in ziro from App component
    // tslint:disable-next-line:no-input-rename
    @Input('groupziro')
    public ziroForm: FormGroup;

}
