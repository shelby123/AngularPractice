import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapFlexComponent } from './bootstrap-flex.component';

describe('BootstrapFlexComponent', () => {
  let component: BootstrapFlexComponent;
  let fixture: ComponentFixture<BootstrapFlexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapFlexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
