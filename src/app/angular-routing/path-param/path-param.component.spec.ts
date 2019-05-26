import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathParamComponent } from './path-param.component';

describe('PathParamComponent', () => {
  let component: PathParamComponent;
  let fixture: ComponentFixture<PathParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
