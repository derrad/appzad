import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankeFormComponent } from './banke-form.component';

describe('BankeFormComponent', () => {
  let component: BankeFormComponent;
  let fixture: ComponentFixture<BankeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
