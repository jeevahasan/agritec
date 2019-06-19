import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDiscussComponent } from './dash-discuss.component';

describe('DashDiscussComponent', () => {
  let component: DashDiscussComponent;
  let fixture: ComponentFixture<DashDiscussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashDiscussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
