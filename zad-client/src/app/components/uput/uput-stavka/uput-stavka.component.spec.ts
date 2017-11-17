import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UputStavkaComponent } from './uput-stavka.component';

describe('UputStavkaComponent', () => {
  let component: UputStavkaComponent;
  let fixture: ComponentFixture<UputStavkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UputStavkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UputStavkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
