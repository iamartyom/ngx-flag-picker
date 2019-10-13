import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxFlagPickerModule } from 'ngx-flag-picker';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxFlagPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
