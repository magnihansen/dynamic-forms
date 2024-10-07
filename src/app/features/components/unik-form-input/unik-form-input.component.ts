import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { FormsService } from '../../../../core/services/forms.service';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'unik-form-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './unik-form-input.component.html',
  styleUrl: './unik-form-input.component.scss',
})
export class UnikFormInputComponent implements OnInit {
  @Input() validators: ValidatorFn[] = []; // built-in and custom validators
  @Input() asyncValidators: AsyncValidatorFn[] = []; // built-in and custom async validators
  @Input() updateOn: 'blur' | 'change' = 'blur';
  @Input({ required: true }) name!: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() minLength: number | null = null;

  @Input()
  get value() {
    return this._value;
  }
  set value(val: string) {
    this._value = val;
    (this.fs.formGroups.get(this.name) as AbstractControl).setValue(this.value);
    this.fs.updateValueAndValidity();
  }

  @Output() blured: EventEmitter<any> = new EventEmitter();
  
  public formCtrl$!: AbstractControl | null;
  private _value!: string;

  constructor(
    private fs: FormsService
  ) { }
  
  ngOnInit(): void {
    if (this.required) {
      this.validators.push(Validators.required); // manually for now
    }
    if (this.minLength) {
      this.validators.push(Validators.minLength(this.minLength));
    }

    this.fs.addControlFormGroup(this.name, this.validators, this.updateOn);
    this.formCtrl$ = (this.fs.formGroups.get(this.name) as AbstractControl);
  }
}