import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlasnikFormComponent } from './vlasnik-form.component';

describe('VlasnikFormComponent', () => {
  let component: VlasnikFormComponent;
  let fixture: ComponentFixture<VlasnikFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlasnikFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlasnikFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
