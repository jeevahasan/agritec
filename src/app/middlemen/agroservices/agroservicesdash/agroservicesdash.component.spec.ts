import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgroservicesdashComponent } from './agroservicesdash.component';

describe('AgroservicesdashComponent', () => {
  let component: AgroservicesdashComponent;
  let fixture: ComponentFixture<AgroservicesdashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgroservicesdashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgroservicesdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
