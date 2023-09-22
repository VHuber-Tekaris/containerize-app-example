import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkOverviewComponent } from './park-overview.component';

describe('ParkOverviewComponent', () => {
  let component: ParkOverviewComponent;
  let fixture: ComponentFixture<ParkOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkOverviewComponent]
    });
    fixture = TestBed.createComponent(ParkOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
