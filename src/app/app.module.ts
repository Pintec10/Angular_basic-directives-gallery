import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomclassesDirective } from './customclasses.directive';
import { MultiplierDirective } from './multiplier.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomclassesDirective,
    MultiplierDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
