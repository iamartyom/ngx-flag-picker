import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFlagPickerComponent } from './ngx-flag-picker/ngx-flag-picker.component';

@NgModule({
  declarations: [
    NgxFlagPickerComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NgxFlagPickerComponent,
  ]
})
export class NgxFlagPickerModule { }
