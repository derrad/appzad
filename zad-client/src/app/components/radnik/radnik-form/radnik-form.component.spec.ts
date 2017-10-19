import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadnikFormComponent } from './radnik-form.component';

describe('RadnikFormComponent', () => {
  let component: RadnikFormComponent;
  let fixture: ComponentFixture<RadnikFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadnikFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadnikFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
