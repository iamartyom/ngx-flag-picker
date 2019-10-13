# How to use

Add a link tag with [flag-icon-css](https://cdnjs.com/libraries/flag-icon-css) library to your index.html file.

Add **NgxFlagPickerModule** to your module in the import section.

After:

```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ngx-flag-picker
      [selectedCountryCode]="selectedCountryCode"
      [countryCodes]="countryCodes"
      (changedCountryCode)="changeSelectedCountryCode($event)">
    </ngx-flag-picker>
    <h1>{{ selectedCountryCode }}</h1>
  `
})
export class AppComponent {
  selectedCountryCode = 'us';
  countryCodes = ['us', 'lu', 'de', 'bs', 'br', 'pt'];

  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
  }
}
```

## Input parameters:

Name | Type
------------ | -------------
selectedCountryCode | string
countryCodes | string[]
customLabels | Record\<string, string>
showFlags | boolean
showLabels | boolean
showArrow | boolean

## Output parameters:

Name | Type
------------ | -------------
changedCountryCode | EventEmitter\<string>

## [Demo](https://iamartyom.github.io/ngx-flag-picker/)