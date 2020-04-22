import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxSharedModule } from 'projects/ngx-shared/src/public-api';
import { NgxAllMatModule } from 'projects/ngx-all-mat/src/public-api';
import { FormsModule } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxSharedModule,
    NgxAllMatModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
