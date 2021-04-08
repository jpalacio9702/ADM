import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TramaComponent } from './trama.component';

describe('TramaComponent', () => {
  let component: TramaComponent;
  let fixture: ComponentFixture<TramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
