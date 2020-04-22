import { Component, Inject, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerDefaultOptions, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
})
export class DonutChartComponent {
  constructor(
    @Inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS)
    private readonly defaults?: MatProgressSpinnerDefaultOptions
  ) { }
  @Input() public diameter: number = this.defaults?.diameter;
  @Input() public mode: ProgressSpinnerMode = 'determinate';
  @Input() public strokeWidth: number = this.defaults?.strokeWidth;
  @Input() public theme: ThemePalette = 'primary';
  @Input() public value: number;
}
