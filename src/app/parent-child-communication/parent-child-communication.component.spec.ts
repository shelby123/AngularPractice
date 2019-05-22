import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildCommunicationComponent } from './parent-child-communication.component';

describe('ParentChildCommunicationComponent', () => {
  let component: ParentChildCommunicationComponent;
  let fixture: ComponentFixture<ParentChildCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChildCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
