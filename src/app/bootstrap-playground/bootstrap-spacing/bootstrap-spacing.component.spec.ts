import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapSpacingComponent } from './bootstrap-spacing.component';

describe('BootstrapSpacingComponent', () => {
  let component: BootstrapSpacingComponent;
  let fixture: ComponentFixture<BootstrapSpacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapSpacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapSpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
