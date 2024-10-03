import { AfterViewInit, Component, computed, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
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
export class UnikFormComponent<T> implements OnInit, AfterViewInit {
  @Input({ required: true }) name!: string;
  @Input() formModel!: T;
  @Output() submitted = new EventEmitter<T>();
  
  public myFormGroup$: FormGroup = new FormGroup({});

  constructor(private fs: FormsService) {
    this.myFormGroup$ = this.fs.formGroups;
  }
  
  ngOnInit(): void {
    this.fs.addGroup(this.name);
  }

  ngAfterViewInit(): void {
    console.log(this.fs.formGroups);
    this.fs.addMessage(JSON.stringify(this.fs.formGroups.getRawValue()));
  }

  submitForm(form: T): void {
    this.submitted.emit(form);
  }

  public computedMessages = computed(() => {
    return this.fs.messages();
  });
}
