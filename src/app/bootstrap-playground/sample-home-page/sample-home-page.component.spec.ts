import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleHomePageComponent } from './sample-home-page.component';

describe('SampleHomePageComponent', () => {
  let component: SampleHomePageComponent;
  let fixture: ComponentFixture<SampleHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
