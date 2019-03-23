import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingActivationComponent } from './parking-activation.component';

describe('ParkingActivationComponent', () => {
  let component: ParkingActivationComponent;
  let fixture: ComponentFixture<ParkingActivationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingActivationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingActivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
