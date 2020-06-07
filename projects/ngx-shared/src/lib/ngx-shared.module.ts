import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxAllMatModule } from '@aspss/ngx-all-mat';
import { CheckboxFieldComponent, CloseButtonComponent, DonutChartComponent, InputFieldComponent, LabeledIconComponent, SelectFieldComponent } from './components';
import { ProgressButtonDirective } from './directives';
import { FormErrorMessagePipe } from './pipes/form-error-message.pipe';

@NgModule({
  declarations: [
    CheckboxFieldComponent,
    CloseButtonComponent,
    DonutChartComponent,
    InputFieldComponent,
    SelectFieldComponent,
    FormErrorMessagePipe,
    LabeledIconComponent,
    ProgressButtonDirective,
  ],
  imports: [
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
    LabeledIconComponent,
    ProgressButtonDirective,
  ],
})
export class NgxSharedModule { }
