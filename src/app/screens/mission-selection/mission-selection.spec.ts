import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionSelection } from './mission-selection';

describe('MissionSelection', () => {
  let component: MissionSelection;
  let fixture: ComponentFixture<MissionSelection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionSelection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionSelection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
