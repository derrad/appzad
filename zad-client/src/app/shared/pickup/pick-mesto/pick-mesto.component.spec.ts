import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickMestoComponent } from './pick-mesto.component';

describe('PickMestoComponent', () => {
  let component: PickMestoComponent;
  let fixture: ComponentFixture<PickMestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickMestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickMestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
