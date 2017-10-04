import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondSatiComponent } from './fond-sati.component';

describe('FondSatiComponent', () => {
  let component: FondSatiComponent;
  let fixture: ComponentFixture<FondSatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondSatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondSatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
