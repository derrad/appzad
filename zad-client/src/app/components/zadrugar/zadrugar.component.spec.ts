import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadrugarComponent } from './zadrugar.component';

describe('ZadrugarComponent', () => {
  let component: ZadrugarComponent;
  let fixture: ComponentFixture<ZadrugarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZadrugarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadrugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
