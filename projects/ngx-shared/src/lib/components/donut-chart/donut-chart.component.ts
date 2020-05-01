import { Component, Inject, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatProgressSpinnerDefaultOptions, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, ProgressSpinnerMode } from '@angular/material/progress-spinner';

/**
 * Base reference stroke width of the spinner.
 * \@docs-private
 * @type {?}
 */
const BASE_STROKE_WIDTH = 10;

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
  private _diameter = this.defaults?.diameter;
  @Input() public get diameter(): number {
    return this._diameter > BASE_STROKE_WIDTH ? this._diameter : BASE_STROKE_WIDTH;
  }
  public set diameter(value: number) { this._diameter = value; }
  @Input() public mode: ProgressSpinnerMode = 'determinate';
  @Input() public strokeWidth: number = this.defaults?.strokeWidth;
  @Input() public theme: ThemePalette = 'primary';
  @Input() public value: number;
}
