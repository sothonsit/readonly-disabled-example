import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReadonlyComponent } from './readonly/readonly.component';
import { DisabledComponent } from './disabled/disabled.component';

@NgModule({
  imports: [CommonModule, BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, ReadonlyComponent, DisabledComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
