import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuspectElimination } from './suspect-elimination';

describe('SuspectElimination', () => {
  let component: SuspectElimination;
  let fixture: ComponentFixture<SuspectElimination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuspectElimination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuspectElimination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
