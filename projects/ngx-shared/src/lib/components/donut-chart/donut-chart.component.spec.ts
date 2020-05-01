import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatProgressSpinner, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY } from '@angular/material/progress-spinner';
import { By } from '@angular/platform-browser';
import { NgxAllMatModule } from 'projects/ngx-all-mat/src/public-api';
import { DonutChartComponent } from './donut-chart.component';

describe('DonutChartComponent without default', () => {
  let component: DonutChartComponent;
  let fixture: ComponentFixture<DonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxAllMatModule],
      declarations: [DonutChartComponent],
    }).overrideProvider(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS, {
      useValue: null
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ever have diameter>=10', () => {
    expect(component.diameter).toBe(10);
  });
});

describe('DonutChartComponent', () => {
  let component: DonutChartComponent;
  let fixture: ComponentFixture<DonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxAllMatModule],
      declarations: [DonutChartComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sets diameter to default as default', () => {
    const _default = MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY();
    expect(component.diameter).toBe(_default.diameter);
  });

  it('should sets mode to "determinate" as default', () => {
    expect(component.mode).toBe('determinate');
  });

  it('should sets strokeWidth to default as default', () => {
    const _default = MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY();
    expect(component.strokeWidth).toBe(_default.strokeWidth);
  });

  it('should set theme to "primary"', () => {
    expect(component.theme).toBe('primary');
  });

  it('should sets diameter to the shadow-chart', () => {
    component.diameter = 15;
    fixture.detectChanges();

    const shadowChartDE = fixture.debugElement.query(By.css('.shadow-chart'));
    const shadowChart = shadowChartDE.componentInstance as MatProgressSpinner;
    expect(shadowChart.diameter).toBe(component.diameter);
  });

  it('should sets strokeWidth to the shadow-chart', () => {
    component.strokeWidth = 5;
    fixture.detectChanges();

    const shadowChartDE = fixture.debugElement.query(By.css('.shadow-chart'));
    const shadowChart = shadowChartDE.componentInstance as MatProgressSpinner;
    expect(shadowChart.strokeWidth).toBe(component.strokeWidth);
  });

  it('should sets theme to the shadow-chart', () => {
    component.theme = 'warn';
    fixture.detectChanges();

    const shadowChartDE = fixture.debugElement.query(By.css('.shadow-chart'));
    const shadowChart = shadowChartDE.componentInstance as MatProgressSpinner;
    expect(shadowChart.color).toBe(component.theme);
  });

  it('should theme diameter to the main-chart', () => {
    component.theme = 'accent';
    fixture.detectChanges();

    const mainChartDE = fixture.debugElement.query(By.css('.main-chart'));
    const mainChart = mainChartDE.componentInstance as MatProgressSpinner;
    expect(mainChart.color).toBe(component.theme);
  });

  it('should sets mode to the main-chart', () => {
    component.mode = 'indeterminate';
    fixture.detectChanges();

    const mainChartDE = fixture.debugElement.query(By.css('.main-chart'));
    const mainChart = mainChartDE.componentInstance as MatProgressSpinner;
    expect(mainChart.mode).toBe(component.mode);
  });

  it('should sets diameter to the main-chart', () => {
    component.diameter = 15;
    fixture.detectChanges();

    const mainChartDE = fixture.debugElement.query(By.css('.main-chart'));
    const mainChart = mainChartDE.componentInstance as MatProgressSpinner;
    expect(mainChart.diameter).toBe(component.diameter);
  });

  it('should sets strokeWidth to the main-chart', () => {
    component.strokeWidth = 4;
    fixture.detectChanges();

    const mainChartDE = fixture.debugElement.query(By.css('.main-chart'));
    const mainChart = mainChartDE.componentInstance as MatProgressSpinner;
    expect(mainChart.strokeWidth).toBe(component.strokeWidth);
  });

  it('should sets value to the main-chart', () => {
    component.value = 75;
    fixture.detectChanges();

    const mainChartDE = fixture.debugElement.query(By.css('.main-chart'));
    const mainChart = mainChartDE.componentInstance as MatProgressSpinner;
    expect(mainChart.value).toBe(component.value);
  });
});
