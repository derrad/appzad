import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KonstantaComponent } from './konstanta.component';

describe('KonstantaComponent', () => {
  let component: KonstantaComponent;
  let fixture: ComponentFixture<KonstantaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KonstantaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KonstantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
