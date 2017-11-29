import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickZadrugarComponent } from './pick-zadrugar.component';

describe('PickZadrugarComponent', () => {
  let component: PickZadrugarComponent;
  let fixture: ComponentFixture<PickZadrugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickZadrugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickZadrugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
