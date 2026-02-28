import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClueZone } from './clue-zone';

describe('ClueZone', () => {
  let component: ClueZone;
  let fixture: ComponentFixture<ClueZone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClueZone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClueZone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
