import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCardsComponent } from './bootstrap-cards.component';

describe('BootstrapCardsComponent', () => {
  let component: BootstrapCardsComponent;
  let fixture: ComponentFixture<BootstrapCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
