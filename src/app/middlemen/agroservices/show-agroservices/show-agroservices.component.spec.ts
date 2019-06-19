import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAgroservicesComponent } from './show-agroservices.component';

describe('ShowAgroservicesComponent', () => {
  let component: ShowAgroservicesComponent;
  let fixture: ComponentFixture<ShowAgroservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAgroservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAgroservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
