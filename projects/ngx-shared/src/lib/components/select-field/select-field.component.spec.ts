import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormControlDirective } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatFormField, MatPrefix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatSelect } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { MockDirective, MockModule } from 'ng-mocks';
import { NgxAllMatModule } from 'projects/ngx-all-mat/src/public-api';
import { SelectFieldComponent } from './select-field.component';

describe('SelectFieldComponent', () => {
  let component: SelectFieldComponent;
  let fixture: ComponentFixture<SelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MockModule(NgxAllMatModule)],
      declarations: [SelectFieldComponent, MockDirective(FormControlDirective)],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFieldComponent);
    component = fixture.componentInstance;
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
    expect(component.optionsTheme).toBe('primary');
  });

  it('should sets theme to "primary" as default', () => {
    expect(component.prefixTheme).toBe('primary');
  });

  it('should sets required to "false" as default', () => {
    expect(component.required).toBeFalse();
  });

  it('should sets theme to "primary" as default', () => {
    expect(component.theme).toBe('primary');
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

  //#region MatSelect

  it('should sets required to select', () => {
    component.required = true;
    fixture.detectChanges();

    const selectDE = fixture.debugElement.query(By.css('mat-select'));
    const select = selectDE.injector.get(MatSelect);

    expect(select.required).toBe(component.required);
  });

  it('should placeholder type to select', () => {
    component.placeholder = 'number';
    fixture.detectChanges();

    const selectDE = fixture.debugElement.query(By.css('mat-select'));
    const select = selectDE.injector.get(MatSelect);

    expect(select.placeholder).toBe(component.placeholder);
  });

  it('should have the directive FormControlDirective', () => {
    const selectDE = fixture.debugElement.query(By.css('mat-select'));
    const formControlDirective = selectDE.injector.get(FormControlDirective);
    expect(formControlDirective).toBeTruthy();
  });

  it('should sets fieldFormControl to directive FormControlDirective', () => {
    component.fieldFormControl = new FormControl();
    fixture.detectChanges();

    const selectDE = fixture.debugElement.query(By.css('mat-select'));
    const formControlDirective = selectDE.injector.get(FormControlDirective);

    expect(formControlDirective.form).toBe(component.fieldFormControl);
  });

  //#region Options

  it('should sets a none option', () => {
    const noneOptionDE = fixture.debugElement.query(By.css('mat-option'));
    expect(noneOptionDE).toBeTruthy();
  });

  it('should sets a icon to none option', () => {
    const noneIconDE = fixture.debugElement.query(By.css('mat-option>mat-icon'));
    expect(noneIconDE).toBeTruthy();
  });

  it('should have -- as textContent', () => {
    const noneOptionDE = fixture.debugElement.query(By.css('mat-option'));
    const noneOption = noneOptionDE.nativeElement as HTMLElement;
    expect(noneOption.textContent.trim()).toBe('--');
  });

  it('should create options', () => {
    component.items = [{ value: 1 }, { value: 2 }, { value: 3 }];
    fixture.detectChanges();

    const optionDEs = fixture.debugElement.queryAll(By.css('mat-option'));
    expect(optionDEs.length).toBe(component.items.length + 1);
  });

  it('should sets item value to mat-option', () => {
    component.items = [{ value: 1 }, { value: 2 }, { value: 3 }];
    fixture.detectChanges();

    const optionDEs = fixture.debugElement.queryAll(By.css('mat-option'));
    for (let index = 1; index < optionDEs.length; index++) {
      const optionDE = optionDEs[index];
      const option = optionDE.componentInstance;

      expect(option.value).toBe(component.items[index - 1].value);
    }
  });


  it('should sets item value to mat-option.viewValue', () => {
    component.items = [{ value: 1 }, { value: 2 }, { value: 3 }];
    fixture.detectChanges();

    const optionDEs = fixture.debugElement.queryAll(By.css('mat-option'));
    for (let index = 1; index < optionDEs.length; index++) {
      const optionDE = optionDEs[index];
      const option = optionDE.nativeElement as HTMLElement;

      expect(option.textContent.trim()).toBe(component.items[index - 1].value.toString());
    }
  });

  it('should sets item viewValue to mat-option', () => {
    component.items = [
      { value: 10, viewValue: 1 },
      { value: 20, viewValue: 2 },
      { value: 20, viewValue: 3 }
    ];
    fixture.detectChanges();

    const optionDEs = fixture.debugElement.queryAll(By.css('mat-option'));
    for (let index = 1; index < optionDEs.length; index++) {
      const optionDE = optionDEs[index];
      const option = optionDE.nativeElement as HTMLElement;

      expect(option.textContent.trim()).toBe(component.items[index - 1].viewValue.toString());
    }
  });

  it('should sets theme to option icons', () => {
    component.items = [{ value: 1 }, { value: 2 }, { value: 3 }];
    fixture.detectChanges();

    const optionDEs = fixture.debugElement.queryAll(By.css('mat-option'));
    for (const optionDE of optionDEs) {
      const iconDE = optionDE.query(By.css('mat-icon'));
      const icon = iconDE.componentInstance as MatIcon;

      expect(icon.color).toBe(component.optionsTheme);
    }
  });

  it('should sets directive MatPrefix to option icons', () => {
    component.items = [{ value: 1 }, { value: 2 }, { value: 3 }];
    fixture.detectChanges();

    const optionDEs = fixture.debugElement.queryAll(By.css('mat-option'));
    for (const optionDE of optionDEs) {
      const iconDE = optionDE.query(By.css('mat-icon'));
      const matPrefix = iconDE.injector.get(MatPrefix);

      expect(matPrefix).toBeTruthy();
    }
  });

  it('should sets item svgIcons to option icons', () => {
    component.items = [
      { value: 1, svgIcon: 'svgIcon1' },
      { value: 2, svgIcon: 'svgIcon2' },
      { value: 3, svgIcon: 'svgIcon3' }
    ];
    fixture.detectChanges();

    const optionDEs = fixture.debugElement.queryAll(By.css('mat-option'));
    for (let index = 1; index < optionDEs.length; index++) {
      const optionDE = optionDEs[index];
      const iconDE = optionDE.query(By.css('mat-icon'));
      const icon = iconDE.componentInstance as MatIcon;

      expect(icon.svgIcon).toBe(component.items[index - 1].svgIcon);
    }
  });

  it('should sets item icons to option icons', () => {
    component.items = [
      { value: 1, icon: 'svgIcon1' },
      { value: 2, icon: 'svgIcon2' },
      { value: 3, icon: 'svgIcon3' }
    ];
    fixture.detectChanges();

    const optionDEs = fixture.debugElement.queryAll(By.css('mat-option'));
    for (let index = 1; index < optionDEs.length; index++) {
      const optionDE = optionDEs[index];
      const iconDE = optionDE.query(By.css('mat-icon'));
      const icon = iconDE.nativeElement as HTMLElement;

      expect(icon.textContent.trim()).toBe(component.items[index - 1].icon);
    }
  });

  it('should sets item value to option content', () => {
    component.items = [{ value: 1 }, { value: 2 }, { value: 3 }];
    fixture.detectChanges();

    const spanDEs = fixture.debugElement.queryAll(By.css('mat-option span'));
    for (let index = 0; index < spanDEs.length; index++) {
      const spanDE = spanDEs[index];
      const span = spanDE.nativeElement as HTMLElement;

      expect(span.textContent.trim()).toBe(component.items[index].value.toString());
    }
  });

  //#region mat-select-trigger

  it('should sets optionsTheme to icon color', () => {
    component.items = [{ value: 1 }, { value: 2 }, { value: 3 }];
    fixture.detectChanges();

    const selectDE = fixture.debugElement.query(By.css('mat-select'));
    const select = selectDE.componentInstance as MatSelect;
    const triggerDE = fixture.debugElement.query(By.css('mat-select-trigger'));

    const optionDEs = fixture.debugElement.queryAll(By.css('mat-option'));
    for (let index = 1; index < optionDEs.length; index++) {
      const optionDE = optionDEs[index];
      const option = optionDE.componentInstance as MatOption;

      (select as any).selected = option;
      fixture.detectChanges();

      const iconDE = triggerDE.query(By.css('mat-icon'));
      const icon = iconDE.componentInstance as MatIcon;

      expect(icon.color).toBe(component.optionsTheme);
    }
  });

  it('should sets MatPrefix directive to icon', () => {
    component.items = [{ value: 1 }, { value: 2 }, { value: 3 }];
    fixture.detectChanges();

    const selectDE = fixture.debugElement.query(By.css('mat-select'));
    const select = selectDE.componentInstance as MatSelect;
    const trigger = fixture.debugElement.query(By.css('mat-select-trigger'));

    const optionDEs = fixture.debugElement.queryAll(By.css('mat-option'));
    for (let index = 1; index < optionDEs.length; index++) {
      const optionDE = optionDEs[index];
      const option = optionDE.componentInstance as MatOption;

      (select as any).selected = option;
      fixture.detectChanges();

      const iconDE = trigger.query(By.css('mat-icon'));
      const matPrefix = iconDE.injector.get(MatPrefix);

      expect(matPrefix).toBeTruthy();
    }
  });

  //#endregion

  //#endregion

  //#endregion

  //#region IconPrefix

  it('should hide prefix', () => {
    component.prefixIcon = null;
    component.prefixSvgIcon = null;
    fixture.detectChanges();

    const prefixDE = fixture.debugElement.query(By.css('mat-form-field>mat-icon'));
    expect(prefixDE).toBeFalsy();
  });

  it('should sets theme to prefix', () => {
    component.prefixIcon = 'home';

    fixture.detectChanges();
    const prefixDE = fixture.debugElement.query(By.css('mat-form-field>mat-icon'));
    const prefix = prefixDE.componentInstance as MatIcon;
    expect(prefix.color).toBe(component.theme);
  });

  it('should sets prefixSvgIcon to prefix', () => {
    component.prefixSvgIcon = 'prefixIcon';
    fixture.detectChanges();

    const prefixDE = fixture.debugElement.query(By.css('mat-form-field>mat-icon'));
    const prefix = prefixDE.componentInstance as MatIcon;
    expect(prefix.svgIcon).toBe(component.prefixSvgIcon);
  });

  it('should sets prefixIcon to prefix', () => {
    component.prefixIcon = 'number';
    fixture.detectChanges();

    const prefixDE = fixture.debugElement.query(By.css('mat-form-field>mat-icon'));
    const prefix = prefixDE.nativeElement as HTMLElement;
    expect(prefix.textContent.trim()).toBe(component.prefixIcon);
  });

  it('should sets MatPrefix directive to prefix', () => {
    component.prefixSvgIcon = 'prefixIcon';
    fixture.detectChanges();

    const prefixDE = fixture.debugElement.query(By.css('mat-form-field>mat-icon'));
    const prefix = prefixDE.injector.get(MatPrefix);
    expect(prefix).toBeTruthy();
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
