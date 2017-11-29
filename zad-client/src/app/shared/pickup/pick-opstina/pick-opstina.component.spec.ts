import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickOpstinaComponent } from './pick-opstina.component';

describe('PickOpstinaComponent', () => {
  let component: PickOpstinaComponent;
  let fixture: ComponentFixture<PickOpstinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickOpstinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickOpstinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
