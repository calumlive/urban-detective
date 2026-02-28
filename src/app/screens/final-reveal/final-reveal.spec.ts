import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalReveal } from './final-reveal';

describe('FinalReveal', () => {
  let component: FinalReveal;
  let fixture: ComponentFixture<FinalReveal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalReveal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalReveal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
