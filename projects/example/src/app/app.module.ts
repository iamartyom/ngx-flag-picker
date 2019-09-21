import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgxSelectFlagsModule } from 'ngx-select-flags';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxSelectFlagsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
