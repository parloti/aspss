import { InjectionToken, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formErrorMessage',
})
export class FormErrorMessagePipe implements PipeTransform {
  public transform(errorCode: string, ...args: unknown[]): unknown {
    return null;
  }
}

export const FORM_ERROR_MESSAGES = new InjectionToken<{ [key: string]: any }>(
  'form-error-messages',
  {
    providedIn: 'root',
    factory: FORM_ERROR_MESSAGES_FACTORY,
  }
);

export function FORM_ERROR_MESSAGES_FACTORY(): { [key: string]: any } {
  debugger;
  return {};
}
