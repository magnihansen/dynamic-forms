import { Component, Input, OnInit } from '@angular/core';
import { ValidatorFn, AsyncValidatorFn, FormsModule, ReactiveFormsModule, AbstractControl, Validators } from '@angular/forms';
import { FormsService } from '../../../../core/services/forms.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'unik-form-checkbox',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './unik-form-checkbox.component.html',
  styleUrl: './unik-form-checkbox.component.scss',
})
export class UnikFormCheckboxComponent implements OnInit {
  @Input() validators: ValidatorFn[] = []; // built-in and custom validators
  @Input() asyncValidators: AsyncValidatorFn[] = []; // built-in and custom async validators
  @Input() updateOn: 'blur' | 'change' = 'blur';
  @Input() value!: boolean;
  @Input() text!: string;
  @Input({ required: true }) name!: string;

  public formCtrl!: AbstractControl | null;

  constructor(private fs: FormsService) {}

  ngOnInit(): void {
    this.validators.push(Validators.required); // manually for now
    this.fs.addControlFormGroup(this.name, this.validators, this.updateOn);
    this.formCtrl = this.fs.formGroups.get(this.name);
  }
}
