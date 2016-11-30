import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

/** Components **/

import {HomeComponent} from './home/home.component';
import {ButtonComponent} from './button/button.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, ButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, RouterModule.forRoot(rootRouterConfig, { useHash: true }), MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
