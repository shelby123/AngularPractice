import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapColorComponent } from './bootstrap-color.component';

describe('BootstrapColorComponent', () => {
  let component: BootstrapColorComponent;
  let fixture: ComponentFixture<BootstrapColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
