import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterDashboardComponent } from './parameter-dashboard.component';

describe('ParameterDashboardComponent', () => {
  let component: ParameterDashboardComponent;
  let fixture: ComponentFixture<ParameterDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParameterDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
