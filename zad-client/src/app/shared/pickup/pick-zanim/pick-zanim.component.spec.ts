import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickZanimComponent } from './pick-zanim.component';

describe('PickZanimComponent', () => {
  let component: PickZanimComponent;
  let fixture: ComponentFixture<PickZanimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickZanimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickZanimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
