import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpstineFormComponent } from './opstine-form.component';

describe('OpstineFormComponent', () => {
  let component: OpstineFormComponent;
  let fixture: ComponentFixture<OpstineFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpstineFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpstineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
