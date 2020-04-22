import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss'],
})
export class CheckboxFieldComponent
  implements OnInit, AfterViewInit, OnChanges {
  private backgroundElement: HTMLDivElement;
  private borderElement: HTMLDivElement;
  @ViewChild('colorCatcher') private colorCatcher: MatButton;
  @Input() public fieldFormControl: FormControl = new FormControl({
    disable: true,
  });
  @Input() public label: string;
  @ViewChild(MatCheckbox) private matCheckbox: MatCheckbox;
  @Input() public outline = true;
  private svgPath: SVGPathElement;
  @Input() public theme: ThemePalette = 'primary';
  private applyOutline(): void {
    this.backgroundElement.style.backgroundColor = 'transparent';

    const style = getComputedStyle(this.colorCatcher._elementRef.nativeElement);
    const color = style.color;
    this.borderElement.style.borderColor = color;
    this.svgPath.style.setProperty('stroke', color, 'important');
  }
  public ngAfterViewInit(): void {
    const nativeCheckbox = this.matCheckbox._elementRef
      .nativeElement as HTMLElement;

    this.backgroundElement = nativeCheckbox.querySelector(
      '.mat-checkbox-background'
    );
    this.borderElement = nativeCheckbox.querySelector('.mat-checkbox-frame');
    this.svgPath = this.backgroundElement.querySelector('path');

    this.updateOutline();
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['outline'] || changes['theme']) {
      this.updateOutline();
    }
  }

  public ngOnInit(): void { }

  private removeOutline(): void {
    this.backgroundElement.style.removeProperty('background-color');
    this.borderElement.style.removeProperty('border-color');
    this.svgPath.style.removeProperty('stroke');
  }
  private updateOutline() {
    setTimeout(() => {
      if (this.outline === true) {
        this.applyOutline();
      } else {
        this.removeOutline();
      }
    });
  }
}
