import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss'],
})
export class CloseButtonComponent {
  @Input() public icon = 'close';
  @Input() public svgIcon: string;
  @Input() public tabindex = -1;
  @Input() public theme: ThemePalette = 'warn';
}
