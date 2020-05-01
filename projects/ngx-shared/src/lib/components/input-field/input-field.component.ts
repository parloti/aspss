import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
})
export class InputFieldComponent {
  @Input() public appearance: MatFormFieldAppearance = 'outline';
  @Input() public fieldFormControl: FormControl = new FormControl();
  @Input() public hint: string;
  @Input() public label: string;
  @Input() public placeholder: string;
  @Input() public prefixIcon: string;
  @Input() public prefixSvgIcon: string;
  @Input() public required = false;
  @Output() public suffixClick = new EventEmitter<MouseEvent>();
  @Input() public suffixIcon: string;
  @Input() public suffixSvgIcon: string;
  @Input() public theme: ThemePalette = 'primary';
  @Input() public type: string;
}
