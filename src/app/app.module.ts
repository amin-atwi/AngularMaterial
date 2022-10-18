import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthorizedPagesModule } from './components/authorizedPages/authorizedPages.module';
import { BasicModule } from './components/authorizedPages/main/basic/basic.module';
import { UnAuthorizedPagesRoutingModule } from './components/unAuthorizedPages/unAuthorizedPages-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BasicModule,
    BrowserAnimationsModule,
    UnAuthorizedPagesRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
