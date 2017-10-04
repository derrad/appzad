import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametarComponent } from './parametar.component';

describe('ParametarComponent', () => {
  let component: ParametarComponent;
  let fixture: ComponentFixture<ParametarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
