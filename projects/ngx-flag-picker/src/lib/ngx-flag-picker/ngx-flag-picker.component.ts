import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'ngx-flag-picker',
  templateUrl: './ngx-flag-picker.component.html',
  styleUrls: ['./ngx-flag-picker.component.scss']
})
export class NgxFlagPickerComponent {
  @Input() selectedCountryCode: string;
  @Input() countryCodes: string[];

  @Input() customLabels: Record<string, string>;

  @Input() showFlags = true;
  @Input() showLabels = true;
  @Input() showArrow = true;

  @Output() changedCountryCode = new EventEmitter<string>();

  @ViewChild('selectFlags') selectFlagsElementRef: ElementRef;

  private _isShowListCountryFlags = false;
  set isShowListCountryFlags(value: boolean) {
    this._isShowListCountryFlags = value;
    this.changeDetectorRef.markForCheck();
  }
  get isShowListCountryFlags(): boolean {
    return this._isShowListCountryFlags;
  }

  outsideClickSelectFlags = () => {};

  constructor(
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

  getCountryLabel(countryCode: string): string {
    return (this.customLabels && this.customLabels[countryCode]) ?
      this.customLabels[countryCode] :
      countryCode ? countryCode.toUpperCase() : '';
  }

  public changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
    this.closeListCountryFlags();
    this.changedCountryCode.emit(this.selectedCountryCode);
  }

  public toggleListCountryFlags(): void {
    if (this.isShowListCountryFlags) {
      this.closeListCountryFlags();
    } else {
      this.openListCountryFlags();
    }
  }

  private openListCountryFlags(): void {
    this.isShowListCountryFlags = true;
    this.subscribeOutsideClickSelectFlags();
  }

  private closeListCountryFlags(): void {
    this.isShowListCountryFlags = false;
    this.unsubscribeOutsideClickSelectFlags();
  }

  private subscribeOutsideClickSelectFlags(): void {
    this.outsideClickSelectFlags = this.renderer.listen('document', 'click', (event) => {
      if (!this.selectFlagsElementRef.nativeElement.contains(event.target)) {
        this.closeListCountryFlags();
      }
    });
  }

  private unsubscribeOutsideClickSelectFlags(): void {
    if (this.outsideClickSelectFlags) {
      this.outsideClickSelectFlags();
      this.outsideClickSelectFlags = undefined;
    }
  }
}
