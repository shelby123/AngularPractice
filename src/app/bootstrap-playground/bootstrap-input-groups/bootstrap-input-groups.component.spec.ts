import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapInputGroupsComponent } from './bootstrap-input-groups.component';

describe('BootstrapInputGroupsComponent', () => {
  let component: BootstrapInputGroupsComponent;
  let fixture: ComponentFixture<BootstrapInputGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapInputGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapInputGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
