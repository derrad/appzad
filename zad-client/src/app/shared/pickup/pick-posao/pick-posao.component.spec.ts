import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickPosaoComponent } from './pick-posao.component';

describe('PickPosaoComponent', () => {
  let component: PickPosaoComponent;
  let fixture: ComponentFixture<PickPosaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickPosaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickPosaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
