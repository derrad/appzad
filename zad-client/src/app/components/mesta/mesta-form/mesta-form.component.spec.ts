import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MestaFormComponent } from './mesta-form.component';

describe('MestaFormComponent', () => {
  let component: MestaFormComponent;
  let fixture: ComponentFixture<MestaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MestaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MestaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
