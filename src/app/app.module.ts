import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorModule } from './network/interceptor/interceptor.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AutofocusDirective } from './shared/directives/autofocus/autofocus.directive';

@NgModule({
  declarations: [AppComponent, AutofocusDirective, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    InterceptorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
