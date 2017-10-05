import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParmetarFormComponent } from './parmetar-form.component';

describe('ParmetarFormComponent', () => {
  let component: ParmetarFormComponent;
  let fixture: ComponentFixture<ParmetarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParmetarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParmetarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
