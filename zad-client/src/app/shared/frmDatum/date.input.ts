import {Component, ElementRef, HostListener, Renderer, forwardRef,ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';



export const DATE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MyDateInput),
  multi: true
};

@Component({
    selector:"my-input",
    template:`<input #input (input)="onChange($event)" (blur)="touchCallback()" type="date" [attr.disabled]="disabled?true:null">`,
    styles:[],
    providers:[DATE_VALUE_ACCESSOR]
})
export class MyDateInput implements ControlValueAccessor{
    @ViewChild("input")
    input:ElementRef;
    disabled=false;
    changeCallback=(data:any)=>{};
    touchCallback=()=>{};

    onChange(event){
        let timestamp=this.convertToTimestamp(event.target.value);
        this.changeCallback(timestamp);
    }

    convertToTimestamp(formatedDate){
        //TODO:implement
    }

    convertFromTimestamp(timestamp){
        //TODO:implement
    }

    writeValue(obj: any){
        let formatedDate=this.convertFromTimestamp(obj);
        this.input.nativeElement.value=formatedDate;
    }

    registerOnChange(fn: any){
        this.changeCallback=fn;
    }

    registerOnTouched(fn: any){
        this.touchCallback=fn;
    }

    setDisabledState(isDisabled: boolean){
        this.disabled=isDisabled;
    }
}


//<my-input class="form-control" [formControlName]="question.key"></my-input>
//<my-input [(ngModel)]="myModel"></my-input>

