import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VlasnikComponent } from './vlasnik.component';

describe('VlasnikComponent', () => {
  let component: VlasnikComponent;
  let fixture: ComponentFixture<VlasnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VlasnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VlasnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
