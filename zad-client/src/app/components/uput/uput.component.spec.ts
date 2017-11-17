import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UputComponent } from './uput.component';

describe('UputComponent', () => {
  let component: UputComponent;
  let fixture: ComponentFixture<UputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
