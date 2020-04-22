import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIcon } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { MockModule } from 'ng-mocks';
import { NgxAllMatModule } from 'projects/ngx-all-mat/src/public-api';
import { CloseButtonComponent } from './close-button.component';


describe('CloseButtonComponent', () => {
  let component: CloseButtonComponent;
  let fixture: ComponentFixture<CloseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MockModule(NgxAllMatModule)],
      declarations: [CloseButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sets icon to "close" as default', () => {
    expect(component.icon).toBe('close');
  });

  it('should sets tabindex to -1 as default', () => {
    expect(component.tabindex).toBe(-1);
  });

  it('should set theme to "warn"', () => {
    expect(component.theme).toBe('warn');
  });

  it('should sets tabindex to the button', () => {
    component.tabindex = 10;
    fixture.detectChanges();

    const buttonDE = fixture.debugElement.query(By.css('button'));
    const buttonNE = buttonDE.nativeElement as HTMLButtonElement;
    expect(buttonNE.tabIndex).toBe(component.tabindex);
  });

  it('should sets theme to the mat-icon', () => {
    component.theme = 'primary';
    fixture.detectChanges();

    const matIconDE = fixture.debugElement.query(By.css('mat-icon'));
    const matIconComponent = matIconDE.componentInstance as MatIcon;
    expect(matIconComponent.color).toBe(component.theme);
  });

  it('should sets icon to the mat-icon', () => {
    component.svgIcon = 'home';
    fixture.detectChanges();

    const matIconDE = fixture.debugElement.query(By.css('mat-icon'));
    const matIconComponent = matIconDE.componentInstance as MatIcon;
    expect(matIconComponent.svgIcon).toBe(component.svgIcon);
  });

  it('should sets icon to the mat-icon', () => {
    component.icon = 'home';
    fixture.detectChanges();

    const matIconDE = fixture.debugElement.query(By.css('mat-icon'));
    const matIconComponent = matIconDE.nativeElement as HTMLElement;
    expect(matIconComponent.textContent.trim()).toBe(component.icon);
  });
});
