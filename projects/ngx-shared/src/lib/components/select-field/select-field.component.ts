import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
})
export class SelectFieldComponent implements OnInit {
  constructor() { }
  @Input() public appearance: MatFormFieldAppearance = 'outline';
  @Input() public fieldFormControl: FormControl = new FormControl();
  @Input() public hint: string;
  @Input() public items: { icon?: string, svgIcon?: string, value: any, viewValue?: any }[];
  @Input() public label: string;
  @Input() public optionsTheme: ThemePalette = 'primary';
  @Input() public placeholder: string;
  @Input() public prefixIcon: string;
  @Input() public prefixSvgIcon: string;
  @Input() public prefixTheme: ThemePalette = 'primary';
  @Input() public required = false;
  @Input() public theme: ThemePalette = 'primary';

  public ngOnInit(): void { }
}
