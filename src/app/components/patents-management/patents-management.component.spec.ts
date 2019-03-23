import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatentsManagementComponent } from './patents-management.component';

describe('PatentsManagementComponent', () => {
  let component: PatentsManagementComponent;
  let fixture: ComponentFixture<PatentsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatentsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatentsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
