import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UputFormComponent } from './uput-form.component';

describe('UputFormComponent', () => {
  let component: UputFormComponent;
  let fixture: ComponentFixture<UputFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UputFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
