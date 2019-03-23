import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingMonitorComponent } from './parking-monitor.component';

describe('ParkingMonitorComponent', () => {
  let component: ParkingMonitorComponent;
  let fixture: ComponentFixture<ParkingMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
