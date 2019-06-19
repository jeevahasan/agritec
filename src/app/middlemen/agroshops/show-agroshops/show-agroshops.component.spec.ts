import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAgroshopsComponent } from './show-agroshops.component';

describe('ShowAgroshopsComponent', () => {
  let component: ShowAgroshopsComponent;
  let fixture: ComponentFixture<ShowAgroshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAgroshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAgroshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
