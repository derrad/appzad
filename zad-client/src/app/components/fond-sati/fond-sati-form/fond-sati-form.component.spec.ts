import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondSatiFormComponent } from './fond-sati-form.component';

describe('FondSatiFormComponent', () => {
  let component: FondSatiFormComponent;
  let fixture: ComponentFixture<FondSatiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondSatiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondSatiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
