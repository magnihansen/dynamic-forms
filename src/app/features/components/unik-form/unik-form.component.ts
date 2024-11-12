import { AfterViewInit, Component, computed, EventEmitter, input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsService } from '../../../../core/services/forms.service';
import { UnikFormGroupDirective } from '../../../../core/directives/unik-form.directive';
import { UnikFormFieldDirective } from '../../../../core/directives/unik-field.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'unik-form',
  standalone: true,
  templateUrl: './unik-form.component.html',
  providers: [FormsService],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    UnikFormGroupDirective, 
    UnikFormFieldDirective,
  ],
})
export class UnikFormComponent<T extends { [K in keyof T]: AbstractControl<any, any>; }> implements OnInit, AfterViewInit {
  @Output() submitted = new EventEmitter<T>();

  name = input.required<string>();
  formModel = input<T>();
  
  public myFormGroup$: FormGroup<T> = new FormGroup<T>({} as T);

  constructor(private fs: FormsService) {
    this.myFormGroup$ = this.fs.formGroups;
  }
  
  ngOnInit(): void {
    this.fs.addGroup(this.name());
  }

  ngAfterViewInit(): void {
    this.fs.addMessage(JSON.stringify(this.fs.formGroups.getRawValue()));
  }

  submitForm(): void {
    this.fs.addMessage(JSON.stringify(this.fs.formGroups.getRawValue()));
    console.log(this.fs.formGroups);
    this.submitted.emit(this.formModel());
  }

  public computedMessages = computed(() => {
    return this.fs.messages();
  });
}
