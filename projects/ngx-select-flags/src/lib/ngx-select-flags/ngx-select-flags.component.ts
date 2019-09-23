import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'ngx-select-flags',
  templateUrl: './ngx-select-flags.component.html',
  styleUrls: ['./ngx-select-flags.component.scss']
})
export class NgxSelectFlagsComponent {
  isShowListCountryFlags = false;

  @Input() selectedCountryCode: string;
  @Input() countryCodes: string[];

  @Output() changedCountryCode = new EventEmitter<string>();

  @ViewChild('selectFlags', { static: false }) selectFlagsElementRef: ElementRef;

  outsideClickSelectFlags = () => {};

  constructor(
    private renderer: Renderer2,
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
