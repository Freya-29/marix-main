import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackCampaignComponent } from './track-campaign.component';

describe('TrackCampaignComponent', () => {
  let component: TrackCampaignComponent;
  let fixture: ComponentFixture<TrackCampaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackCampaignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
