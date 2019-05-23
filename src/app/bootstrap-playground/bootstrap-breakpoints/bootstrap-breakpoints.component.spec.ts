import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapBreakpointsComponent } from './bootstrap-breakpoints.component';

describe('BootstrapBreakpointsComponent', () => {
  let component: BootstrapBreakpointsComponent;
  let fixture: ComponentFixture<BootstrapBreakpointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapBreakpointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapBreakpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
