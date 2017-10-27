import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonstantaFormComponent } from './konstanta-form.component';

describe('KonstantaFormComponent', () => {
  let component: KonstantaFormComponent;
  let fixture: ComponentFixture<KonstantaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonstantaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonstantaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
