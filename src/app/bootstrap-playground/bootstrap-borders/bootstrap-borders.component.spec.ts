import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapBordersComponent } from './bootstrap-borders.component';

describe('BootstrapBordersComponent', () => {
  let component: BootstrapBordersComponent;
  let fixture: ComponentFixture<BootstrapBordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapBordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapBordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
