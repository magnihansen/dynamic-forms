import { Injectable, signal } from '@angular/core';
import {
  NonNullableFormBuilder,
  FormGroup,
  FormControl,
  ValidatorFn,
} from '@angular/forms';

// https://stackoverflow.com/questions/77918786/angular-reactive-form-with-signals-based-service

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  public formGroups: any = signal<FormGroup<any>>;
  public messages = signal<string[]>([]);
  private _formName: string = '';

  constructor(private fb: NonNullableFormBuilder) { }

  public addGroup(name: string): void {
    this.formGroups = this.fb.group({});
    this._formName = name;
    this.addMessage(`Form ${this._formName} added`);
  }

  public addControlFormGroup(
    formControlName: string,
    validators: ValidatorFn[],
    updateOn: 'blur' | 'change' = 'blur'
  ): void {
    let fc = this.fb.control('', { updateOn: updateOn });

    if (validators) {
      fc.setValidators(validators);
    } else {
      fc.clearValidators();
    }

    this.formGroups.addControl(formControlName, fc);
    this.addMessage(`Form control ${formControlName} added`);
  }

  // public generateFormGroup(): void {
  //   this._formControls.forEach((fc: FormControl, index) => {
  //     this.formGroups$.controls[index] = fc;
  //   });
  //   this.addMessage(`Form ${this._formName} generated`);
  // }

  public updateValueAndValidity(): void {
    this.formGroups.updateValueAndValidity();
  }

  public isFormValid(): boolean {
    return this.formGroups.valid;
  }

  public resetForm(): void {
    Object.entries(this.formGroups.controls).forEach((control, formIndex) => {
      this.formGroups.controls[control[0]]?.reset();
    });
  }

  public addMessage(message: string): void {
    this.messages.update((messages) => {
      return [...messages, message];
    });
  }
}
