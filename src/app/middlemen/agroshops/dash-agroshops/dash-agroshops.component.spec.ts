import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashAgroshopsComponent } from './dash-agroshops.component';

describe('DashAgroshopsComponent', () => {
  let component: DashAgroshopsComponent;
  let fixture: ComponentFixture<DashAgroshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashAgroshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashAgroshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
