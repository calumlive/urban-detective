import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentZone } from './deployment-zone';

describe('DeploymentZone', () => {
  let component: DeploymentZone;
  let fixture: ComponentFixture<DeploymentZone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeploymentZone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeploymentZone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
