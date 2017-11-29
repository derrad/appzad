import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickDrzavaComponent } from './pick-drzava.component';

describe('PickDrzavaComponent', () => {
  let component: PickDrzavaComponent;
  let fixture: ComponentFixture<PickDrzavaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickDrzavaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickDrzavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
