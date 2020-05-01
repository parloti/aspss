import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxAllMatModule } from '@aspss/ngx-all-mat';
import { CheckboxFieldComponent, CloseButtonComponent, DonutChartComponent, InputFieldComponent, SelectFieldComponent } from './components';
import { FormErrorMessagePipe } from './pipes/form-error-message.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    FlexModule,

    NgxAllMatModule,
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
export class NgxSharedModule { }
