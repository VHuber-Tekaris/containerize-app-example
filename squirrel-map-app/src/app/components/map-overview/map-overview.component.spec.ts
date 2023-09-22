import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapOverviewComponent } from './map-overview.component';

describe('MapOverviewComponent', () => {
  let component: MapOverviewComponent;
  let fixture: ComponentFixture<MapOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapOverviewComponent]
    });
    fixture = TestBed.createComponent(MapOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
