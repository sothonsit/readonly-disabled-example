import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { CommonModule } from '@angular/common';
import { ReadonlyComponent } from './readonly/readonly.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
  ],
  declarations: [AppComponent, ReadonlyComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
