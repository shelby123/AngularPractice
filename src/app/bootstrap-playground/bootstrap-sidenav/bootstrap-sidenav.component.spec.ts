import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapSidenavComponent } from './bootstrap-sidenav.component';

describe('BootstrapSidenavComponent', () => {
  let component: BootstrapSidenavComponent;
  let fixture: ComponentFixture<BootstrapSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
