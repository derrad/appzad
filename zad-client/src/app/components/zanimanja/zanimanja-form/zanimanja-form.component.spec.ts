import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZanimanjaFormComponent } from './zanimanja-form.component';

describe('ZanimanjaFormComponent', () => {
  let component: ZanimanjaFormComponent;
  let fixture: ComponentFixture<ZanimanjaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZanimanjaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZanimanjaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
