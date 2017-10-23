import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanimanjaComponent } from './zanimanja.component';

describe('ZanimanjaComponent', () => {
  let component: ZanimanjaComponent;
  let fixture: ComponentFixture<ZanimanjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZanimanjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanimanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
