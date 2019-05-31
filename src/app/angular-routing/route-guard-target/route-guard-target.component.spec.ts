import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardTargetComponent } from './route-guard-target.component';

describe('RouteGuardTargetComponent', () => {
  let component: RouteGuardTargetComponent;
  let fixture: ComponentFixture<RouteGuardTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteGuardTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteGuardTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
