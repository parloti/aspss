import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public diameter: number = 50;
  public mode: ProgressSpinnerMode = 'determinate';
  public outline = true;
  public progress = 50;
  public strokeWidth = 5;
  public theme: ThemePalette = 'primary';
}
