import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionOverview } from './mission-overview';

describe('MissionOverview', () => {
  let component: MissionOverview;
  let fixture: ComponentFixture<MissionOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
