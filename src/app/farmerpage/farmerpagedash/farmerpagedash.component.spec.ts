import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerpagedashComponent } from './farmerpagedash.component';

describe('FarmerpagedashComponent', () => {
  let component: FarmerpagedashComponent;
  let fixture: ComponentFixture<FarmerpagedashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerpagedashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerpagedashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
