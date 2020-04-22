import { Component, SimpleChange, SimpleChanges } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControlDirective } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatRipple } from '@angular/material/core';
import { By } from '@angular/platform-browser';
import { MockDirective } from 'ng-mocks';
import { CheckboxFieldComponent } from './checkbox-field.component';

describe('CheckboxFieldComponent', () => {
  let component: CheckboxFieldComponent;
  let fixture: ComponentFixture<CheckboxFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxFieldComponent,
        MockDirective(FormControlDirective),
        MatCheckbox, MatButton, MatRipple
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set theme to primary as default', () => {
    expect(component.theme).toBe('primary');
  });

  it('should sets outline to true as default', () => {
    expect(component.outline).toBeTrue();
  });

  it('should set theme to MatCheckbox.color', () => {
    const matCheckboxDE = fixture.debugElement.query(By.css('mat-checkbox'));
    expect(component.theme).toBe(matCheckboxDE.componentInstance.color);
  });

  it('should set fieldFormControl to directive formControl', () => {
    const matCheckboxDE = fixture.debugElement.query(
      By.css('mat-checkbox')
    );
    const directive = matCheckboxDE.injector.get(FormControlDirective);

    expect(directive.form).toBe(component.fieldFormControl);
  });

  it('should sets backgroundColor to "transparent" as default', (done: DoneFn) => {
    const backgroundDE = fixture.debugElement.query(By.css('.mat-checkbox-background'));
    const backgroundNE = backgroundDE.nativeElement as HTMLElement;

    setTimeout(() => {
      expect(backgroundNE.style.backgroundColor).toBe('transparent');
      done();
    });
  });

  it('should sets borderColor to "primary" as default', (done: DoneFn) => {
    const borderDE = fixture.debugElement.query(By.css('.mat-checkbox-frame'));
    const borderNE = borderDE.nativeElement as HTMLElement;
    const colorCatcherDE = fixture.debugElement.query(By.css('#color-catcher'));
    const colorCatcherNE = colorCatcherDE.nativeElement as HTMLElement;

    setTimeout(() => {
      const style = getComputedStyle(colorCatcherNE);
      const color = style.color;
      expect(borderNE.style.borderColor).toBe(color);
      done();
    });
  });

  it('should sets stroke to "primary" as default', (done: DoneFn) => {
    const svgPathDE = fixture.debugElement.query(By.css('path'));
    const svgPathNE = svgPathDE.nativeElement as SVGPathElement;
    const colorCatcherDE = fixture.debugElement.query(By.css('#color-catcher'));
    const colorCatcherNE = colorCatcherDE.nativeElement as HTMLElement;

    setTimeout(() => {
      const style = getComputedStyle(colorCatcherNE);
      const color = style.color;
      expect(svgPathNE.style.stroke).toBe(color);
      done();
    });
  });

  it('should update borderColor according to the theme', (done: DoneFn) => {
    const borderDE = fixture.debugElement.query(By.css('.mat-checkbox-frame'));
    const borderNE = borderDE.nativeElement as HTMLElement;
    const colorCatcherDE = fixture.debugElement.query(By.css('#color-catcher'));
    const colorCatcherNE = colorCatcherDE.nativeElement as HTMLElement;

    component.theme = 'accent';
    fixture.detectChanges();

    setTimeout(() => {
      const style = getComputedStyle(colorCatcherNE);
      const color = style.color;
      expect(borderNE.style.borderColor).toBe(color);
      done();
    });
  });

  it('should update stroke according to the theme', (done: DoneFn) => {
    const svgPathDE = fixture.debugElement.query(By.css('path'));
    const svgPathNE = svgPathDE.nativeElement as SVGPathElement;
    const colorCatcherDE = fixture.debugElement.query(By.css('#color-catcher'));
    const colorCatcherNE = colorCatcherDE.nativeElement as HTMLElement;

    component.theme = 'warn';
    fixture.detectChanges();

    setTimeout(() => {
      const style = getComputedStyle(colorCatcherNE);
      const color = style.color;
      expect(svgPathNE.style.stroke).toBe(color);
      done();
    });
  });

  it('should remove backgroundColor when outline is false', (done: DoneFn) => {
    const backgroundDE = fixture.debugElement.query(By.css('.mat-checkbox-background'));
    const backgroundNE = backgroundDE.nativeElement as HTMLElement;

    component.outline = false;
    const changes: SimpleChanges = { outline: new SimpleChange(true, false, false) };
    component.ngOnChanges(changes);
    fixture.detectChanges();

    setTimeout(() => {
      expect(backgroundNE.style.backgroundColor).toBe('');
      done();
    });
  });

  it('should remove borderColor when outline is false', (done: DoneFn) => {
    const borderDE = fixture.debugElement.query(By.css('.mat-checkbox-frame'));
    const borderNE = borderDE.nativeElement as HTMLElement;
    const colorCatcherDE = fixture.debugElement.query(By.css('#color-catcher'));
    const colorCatcherNE = colorCatcherDE.nativeElement as HTMLElement;

    component.outline = false;
    const changes: SimpleChanges = { outline: new SimpleChange(true, false, false) };
    component.ngOnChanges(changes);
    fixture.detectChanges();

    setTimeout(() => {
      const style = getComputedStyle(colorCatcherNE);
      const color = style.color;
      expect(borderNE.style.borderColor).toBe('');
      done();
    });
  });

  it('should remove stroke when outline is false', (done: DoneFn) => {
    const svgPathDE = fixture.debugElement.query(By.css('path'));
    const svgPathNE = svgPathDE.nativeElement as SVGPathElement;
    const colorCatcherDE = fixture.debugElement.query(By.css('#color-catcher'));
    const colorCatcherNE = colorCatcherDE.nativeElement as HTMLElement;

    component.outline = false;
    const changes: SimpleChanges = { outline: new SimpleChange(true, false, false) };
    component.ngOnChanges(changes);
    fixture.detectChanges();

    setTimeout(() => {
      const style = getComputedStyle(colorCatcherNE);
      const color = style.color;
      expect(svgPathNE.style.stroke).toBe('');
      done();
    });
  });

  it('should set label to mat-checkbox', () => {
    component.label = 'label';

    fixture.detectChanges();

    const matCheckboxDE = fixture.debugElement.query(
      By.css('mat-checkbox span.mat-checkbox-label')
    );
    const span = matCheckboxDE.nativeElement as HTMLElement;
    expect(span.innerText.trim()).toBe(component.label);
  });
});

describe('CheckboxWithProjectedLabel', () => {
  @Component({
    template: `<checkbox-field [label]="label"><span id="projected-label"></span></checkbox-field>`
  })
  class CheckboxWithProjectedLabel {
    public label: string = 'label';
  }

  let component: CheckboxWithProjectedLabel;
  let fixture: ComponentFixture<CheckboxWithProjectedLabel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CheckboxWithProjectedLabel,
        CheckboxFieldComponent,
        MockDirective(FormControlDirective), MatCheckbox, MatButton, MatRipple
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxWithProjectedLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should project the checkbox content into the label element', async () => {
    component.label = null;
    fixture.detectChanges();

    const projectedLabelDE = fixture.debugElement.query(By.css('.mat-checkbox-label #projected-label'));
    const projectedLabelNE = projectedLabelDE.nativeElement as HTMLElement;
    expect(projectedLabelNE).toBeTruthy();
  });

  it('should NOT project the checkbox content when input label is defined', async () => {
    component.label = 'text';
    fixture.detectChanges();

    const projectedLabelDE = fixture.debugElement.query(By.css('.mat-checkbox-label #projected-label'));
    expect(projectedLabelDE).toBeFalsy();
  });
});
