import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCountryCode = 'be';
  countryCodes = ['be', 'lu', 'de', 'bs', 'br', 'pt'];
  customLabels = {
    'be': 'Belgium',
    'lu': 'Luxembourg',
    'de': 'Germany',
    'bs': 'Bahamas',
    'br': 'Brazil',
    'pt': 'Portugal'
  };

  changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
  }
}
