import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardRedirectComponent } from './route-guard-redirect.component';

describe('RouteGuardRedirectComponent', () => {
  let component: RouteGuardRedirectComponent;
  let fixture: ComponentFixture<RouteGuardRedirectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteGuardRedirectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteGuardRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
