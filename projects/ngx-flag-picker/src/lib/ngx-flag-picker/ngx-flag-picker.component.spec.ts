import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxFlagPickerComponent } from './ngx-flag-picker.component';

describe('NgxFlagPickerComponent', () => {
  let component: NgxFlagPickerComponent;
  let fixture: ComponentFixture<NgxFlagPickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFlagPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFlagPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
