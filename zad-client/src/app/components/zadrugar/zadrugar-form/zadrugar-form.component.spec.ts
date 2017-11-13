import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadrugarFormComponent } from './zadrugar-form.component';

describe('ZadrugarFormComponent', () => {
  let component: ZadrugarFormComponent;
  let fixture: ComponentFixture<ZadrugarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZadrugarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZadrugarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
