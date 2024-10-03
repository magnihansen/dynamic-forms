import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UnikFormComponent } from "./features/components/unik-form/unik-form.component";
import { UnikFormInputComponent } from "./features/components/unik-form-input/unik-form-input.component";
import { AppComponent } from './app.component';
import { UnikFormSubmitComponent } from './features/components/unik-form-submit/unik-form-submit.component';
import { UnikFormCheckboxComponent } from "./features/components/unik-form-checkbox/unik-form-checkbox.component";

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    UnikFormComponent,
    UnikFormInputComponent,
    UnikFormSubmitComponent,
    UnikFormCheckboxComponent,
],
  exports: [
    UnikFormComponent,
    UnikFormInputComponent,
    UnikFormSubmitComponent,
    UnikFormCheckboxComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
