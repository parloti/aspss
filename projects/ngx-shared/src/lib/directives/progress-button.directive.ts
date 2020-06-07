import { AfterViewInit, Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: 'mat-progress-bar[appProgressButton]'
})
export class ProgressButtonDirective implements OnInit, AfterViewInit {

  constructor(
    private el: ElementRef
  ) { }

  public ngAfterViewInit(): void {
    this.el.nativeElement.style.position = 'absolute';
    this.el.nativeElement.style.left = '-1px';
    this.el.nativeElement.style.top = '-1px';
    this.el.nativeElement.style.border = '1px solid transparent';
    this.el.nativeElement.style.borderRadius = '4px 4px 0 0';
  }

  public ngOnInit(): void {
  }

}
