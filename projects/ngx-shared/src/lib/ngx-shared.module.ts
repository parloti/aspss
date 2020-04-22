import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { CheckboxFieldComponent } from './components/checkbox-field/checkbox-field.component';
import { CloseButtonComponent } from './components/close-button/close-button.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';
import { FlexModule } from '@angular/flex-layout';
import { FormErrorMessagePipe } from './pipes/form-error-message.pipe';

@NgModule({
  declarations: [
    CheckboxFieldComponent,
    CloseButtonComponent,
    DonutChartComponent,
    InputFieldComponent,
    SelectFieldComponent,
    FormErrorMessagePipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    FlexModule,

    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
  exports: [
    CheckboxFieldComponent,
    CloseButtonComponent,
    DonutChartComponent,
    InputFieldComponent,
    SelectFieldComponent,
    FormErrorMessagePipe,
  ],
})
export class NgxSharedModule {}
