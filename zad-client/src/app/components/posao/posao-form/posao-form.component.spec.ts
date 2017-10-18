import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosaoFormComponent } from './posao-form.component';

describe('PosaoFormComponent', () => {
  let component: PosaoFormComponent;
  let fixture: ComponentFixture<PosaoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosaoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosaoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
