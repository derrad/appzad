import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametarFormComponent } from './parametar-form.component';

describe('ParmetarFormComponent', () => {
  let component: ParametarFormComponent;
  let fixture: ComponentFixture<ParametarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
