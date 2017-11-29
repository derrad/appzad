import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickKupacComponent } from './pick-kupac.component';

describe('PickKupacComponent', () => {
  let component: PickKupacComponent;
  let fixture: ComponentFixture<PickKupacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickKupacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickKupacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
