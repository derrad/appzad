import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'zirovlasnik',
    templateUrl: './zirovlasnik.component.html'
})
export class ZiroVlasnikComponent {
    // we will pass in address from App component
    @Input('group')
    public ziroForm: FormGroup;
}