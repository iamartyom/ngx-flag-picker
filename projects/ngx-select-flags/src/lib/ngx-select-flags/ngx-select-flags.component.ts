import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'ngx-select-flags',
  templateUrl: './ngx-select-flags.component.html',
  styleUrls: ['./ngx-select-flags.component.scss']
})
export class NgxSelectFlagsComponent {
  private _isShowListCountryFlags = false;
  set isShowListCountryFlags(value: boolean) {
    this._isShowListCountryFlags = value;
    this.changeDetectorRef.markForCheck();
  }
  get isShowListCountryFlags(): boolean {
    return this._isShowListCountryFlags;
  }

  @Input() selectedCountryCode: string;
  @Input() countryCodes: string[];

  @Input() showFlags = true;
  @Input() showLabels = true;
  @Input() showArrow = true;

  @Output() changedCountryCode = new EventEmitter<string>();

  @ViewChild('selectFlags', { static: false }) selectFlagsElementRef: ElementRef;

  outsideClickSelectFlags = () => {};

  constructor(
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef,
  ) { }

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

  public changeSelectedCountryCode(value: string): void {
    this.selectedCountryCode = value;
    this.closeListCountryFlags();
    this.changedCountryCode.emit(this.selectedCountryCode);
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
