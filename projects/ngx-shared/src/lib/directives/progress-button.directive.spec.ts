import { ElementRef } from '@angular/core';
import { ProgressButtonDirective } from './progress-button.directive';

describe('ProgressButtonDirective', () => {
  let el: ElementRef;

  beforeEach(() => {
    el = {
      nativeElement: { style: {} }
    };
  });


  it('should create an instance', () => {
    const directive = new ProgressButtonDirective(el);
    expect(directive).toBeTruthy();
  });

  it('should set style', () => {
    const directive = new ProgressButtonDirective(el);
    directive.ngAfterViewInit();

    const style = el.nativeElement.style;
    expect(style.position).toBe('absolute');
    expect(style.left).toBe('-1px');
    expect(style.top).toBe('-1px');
    expect(style.border).toBe('1px solid transparent');
    expect(style.borderRadius).toBe('4px 4px 0 0');
  });
});
