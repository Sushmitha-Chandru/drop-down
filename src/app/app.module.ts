import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomDropDownComponent } from './components/custom-drop-down/custom-drop-down.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDropDownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
