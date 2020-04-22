import { EventEmitter } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormControlDirective } from '@angular/forms';
import { MatFormField, MatPrefix, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockDirective, MockModule } from 'ng-mocks';
import { NgxAllMatModule } from 'projects/ngx-all-mat/src/public-api';
import { InputFieldComponent } from './input-field.component';

describe('InputFieldComponent', () => {
  let component: InputFieldComponent;
  let fixture: ComponentFixture<InputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MockModule(NgxAllMatModule)],
      declarations: [InputFieldComponent, MockDirective(FormControlDirective)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldComponent);
    component = fixture.componentInstance;
    component.fieldFormControl = new FormControl();
    fixture.detectChanges();
  });

  //#region Default

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sets appearance to "outline" as default', () => {
    expect(component.appearance).toBe('outline');
  });

  it('should sets theme to "primary" as default', () => {
    expect(component.theme).toBe('primary');
  });

  it('should sets required to "false" as default', () => {
    expect(component.required).toBeFalse();
  });

  it('should instantiats EventEmitter<MouseEvent>', () => {
    expect(component.suffixClick).toBeInstanceOf(EventEmitter);
  });

  //#endregion

  //#region MatFormField

  it('should sets appearance to MatFormField', () => {
    component.appearance = 'fill';
    fixture.detectChanges();

    const matFormFieldDE = fixture.debugElement.query(By.css('mat-form-field'));
    const matFormField = matFormFieldDE.componentInstance as MatFormField;
    expect(matFormField.appearance).toBe(component.appearance);
  });

  it('should sets theme to MatFormField', () => {
    component.theme = 'accent';
    fixture.detectChanges();

    const matFormFieldDE = fixture.debugElement.query(By.css('mat-form-field'));
    const matFormField = matFormFieldDE.componentInstance as MatFormField;
    expect(matFormField.color).toBe(component.theme);
  });

  //#endregion

  //#region MatLabel

  it('should sets label to MatLabel', () => {
    component.label = 'fill';
    fixture.detectChanges();

    const matLabelDE = fixture.debugElement.query(By.css('mat-label'));
    const matLabel = matLabelDE.nativeElement as HTMLElement;
    expect(matLabel.textContent.trim()).toBe(component.label);
  });

  //#endregion

  //#region Input

  it('should sets type to input', () => {
    component.type = 'number';
    fixture.detectChanges();

    const inputDE = fixture.debugElement.query(By.css('input'));
    const input = inputDE.injector.get(MatInput);

    expect(input.type).toBe(component.type);
  });

  it('should sets required to input', () => {
    component.required = true;
    fixture.detectChanges();

    const inputDE = fixture.debugElement.query(By.css('input'));
    const input = inputDE.injector.get(MatInput);

    expect(input.required).toBe(component.required);
  });

  it('should placeholder type to input', () => {
    component.placeholder = 'number';
    fixture.detectChanges();

    const inputDE = fixture.debugElement.query(By.css('input'));
    const input = inputDE.injector.get(MatInput);
    
    expect(input.placeholder).toBe(component.placeholder);
  });

  it('should have the directive MatInput', () => {
    const inputDE = fixture.debugElement.query(By.css('input'));
    const matInput = inputDE.injector.get(MatInput);
    expect(matInput).toBeTruthy();
  });

  it('should have the directive FormControlDirective', () => {
    const inputDE = fixture.debugElement.query(By.css('input'));
    const formControlDirective = inputDE.injector.get(FormControlDirective);
    expect(formControlDirective).toBeTruthy();
  });

  it('should sets fieldFormControl to directive FormControlDirective', () => {
    component.fieldFormControl = new FormControl();
    fixture.detectChanges();

    const inputDE = fixture.debugElement.query(By.css('input'));
    const formControlDirective = inputDE.injector.get(FormControlDirective);

    expect(formControlDirective.form).toBe(component.fieldFormControl);
  });

  //#endregion

  //#region IconPrefix

  it('should hide prefix', () => {
    component.prefixIcon = null;
    component.prefixSvgIcon = null;
    fixture.detectChanges();

    const prefixDE = fixture.debugElement.query(By.css('.prefix'));
    expect(prefixDE).toBeFalsy();
  });

  it('should sets theme to prefix', () => {
    component.prefixIcon = 'home';

    fixture.detectChanges();
    const prefixDE = fixture.debugElement.query(By.css('.prefix'));
    const prefix = prefixDE.componentInstance as MatIcon;
    expect(prefix.color).toBe(component.theme);
  });

  it('should sets prefixSvgIcon to prefix', () => {
    component.prefixSvgIcon = 'prefixIcon';
    fixture.detectChanges();

    const prefixDE = fixture.debugElement.query(By.css('.prefix'));
    const prefix = prefixDE.componentInstance as MatIcon;
    expect(prefix.svgIcon).toBe(component.prefixSvgIcon);
  });

  it('should sets prefixIcon to prefix', () => {
    component.prefixIcon = 'number';
    fixture.detectChanges();

    const prefixDE = fixture.debugElement.query(By.css('.prefix'));
    const prefix = prefixDE.nativeElement as HTMLElement;
    expect(prefix.textContent.trim()).toBe(component.prefixIcon);
  });

  it('should sets MatPrefix directive to prefix', () => {
    component.prefixSvgIcon = 'prefixIcon';
    fixture.detectChanges();

    const prefixDE = fixture.debugElement.query(By.css('.prefix'));
    const prefix = prefixDE.injector.get(MatPrefix);
    expect(prefix).toBeTruthy();
  });

  //#endregion

  //#region IconSuffix

  it('should hide suffix', () => {
    component.suffixIcon = null;
    component.suffixSvgIcon = null;
    fixture.detectChanges();

    const suffixDE = fixture.debugElement.query(By.css('.suffix'));
    expect(suffixDE).toBeFalsy();
  });

  it('should sets theme to suffix', () => {
    component.suffixIcon = 'name';
    fixture.detectChanges();

    const suffixDE = fixture.debugElement.query(By.css('.suffix'));
    const suffix = suffixDE.componentInstance as MatIcon;
    expect(suffix.color).toBe(component.theme);
  });

  it('should sets suffixSvgIcon to suffix', () => {
    component.suffixSvgIcon = 'suffixIcon';
    fixture.detectChanges();

    const suffixDE = fixture.debugElement.query(By.css('.suffix'));
    const suffix = suffixDE.componentInstance as MatIcon;
    expect(suffix.svgIcon).toBe(component.suffixSvgIcon);
  });

  it('should sets suffixIcon to suffix', () => {
    component.suffixIcon = 'number';
    fixture.detectChanges();

    const suffixDE = fixture.debugElement.query(By.css('.suffix'));
    const suffix = suffixDE.nativeElement as HTMLElement;
    expect(suffix.textContent.trim()).toBe(component.suffixIcon);
  });

  it('should sets MatSuffix directive to suffix', () => {
    component.suffixIcon = 'number';
    fixture.detectChanges();
    
    const suffixDE = fixture.debugElement.query(By.css('.suffix'));
    const suffix = suffixDE.injector.get(MatSuffix);
    expect(suffix).toBeTruthy();
  });

  it('should emits suffixClick', () => {
    component.suffixIcon = 'number';
    fixture.detectChanges();
    
    const suffixDE = fixture.debugElement.query(By.css('.suffix'));
    const emitSpy = spyOn(component.suffixClick, 'emit');
    suffixDE.nativeElement.click();
    
    expect(emitSpy).toHaveBeenCalledTimes(1);
  });

  //#endregion

  //#region Hint

  it('should sets hint to mat-hint', () => {
    component.hint = 'hint';
    fixture.detectChanges();

    const hintDE = fixture.debugElement.query(By.css('mat-hint'));
    const hint = hintDE.nativeElement as HTMLElement;
    expect(hint.textContent.trim()).toBe(component.hint);
  });

  //#endregion

});
