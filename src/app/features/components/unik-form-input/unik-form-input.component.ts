import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidator, AsyncValidatorFn, ReactiveFormsModule, Validator, ValidatorFn, Validators } from '@angular/forms';
import { FormsService } from '../../../../core/services/forms.service';

@Component({
  selector: 'unik-form-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './unik-form-input.component.html',
  styleUrl: './unik-form-input.component.scss'
})
export class UnikFormInputComponent implements OnInit {
  @Input() validators: ValidatorFn[] = []; // built-in and custom validators
  @Input() asyncValidators: AsyncValidatorFn[] = []; // built-in and custom async validators
  @Input() updateOn: 'blur' | 'change' = 'blur';
  @Input({ required: true }) name!: string;
  
  public formCtrl!: AbstractControl | null;

  constructor(private fs: FormsService) { }

  ngOnInit(): void {
    this.validators.push(Validators.minLength(5));
    this.validators.push(Validators.required); 
    this.fs.addControlFormGroup(this.name, this.validators, this.updateOn);
  }
}