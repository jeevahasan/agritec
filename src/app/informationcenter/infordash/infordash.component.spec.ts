import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfordashComponent } from './infordash.component';

describe('InfordashComponent', () => {
  let component: InfordashComponent;
  let fixture: ComponentFixture<InfordashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfordashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfordashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
