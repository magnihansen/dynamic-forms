import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UnikFormComponent } from "./features/components/unik-form/unik-form.component";
import { UnikFormInputComponent } from "./features/components/unik-form-input/unik-form-input.component";
import { AppComponent } from './app.component';
import { UnikFormSubmitComponent } from './features/components/unik-form-submit/unik-form-submit.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    UnikFormComponent,
    UnikFormInputComponent,
    UnikFormSubmitComponent
  ],
  exports: [
    UnikFormComponent,
    UnikFormInputComponent,
    UnikFormSubmitComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
