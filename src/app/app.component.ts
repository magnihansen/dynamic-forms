import { Component } from '@angular/core';
import { FormModel } from './models/form.model';
import { FormsService } from '../core/services/forms.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dynamic-forms';

  public myFormGroup$: FormGroup = new FormGroup({});
  public formModel: FormModel = {} as FormModel;

  constructor(private fs: FormsService) { }

  submitted(form: any): void {
    this.fs.updateValueAndValidity();
    console.log('Form submitted', form);
    console.log('Form model', this.formModel);
  }
}
