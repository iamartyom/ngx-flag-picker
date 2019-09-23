import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSelectFlagsComponent } from './ngx-select-flags.component';

describe('NgxSelectFlagsComponent', () => {
  let component: NgxSelectFlagsComponent;
  let fixture: ComponentFixture<NgxSelectFlagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSelectFlagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSelectFlagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
