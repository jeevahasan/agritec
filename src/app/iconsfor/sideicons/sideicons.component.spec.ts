import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideiconsComponent } from './sideicons.component';

describe('SideiconsComponent', () => {
  let component: SideiconsComponent;
  let fixture: ComponentFixture<SideiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
