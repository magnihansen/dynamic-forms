import { AfterViewInit, Component, computed, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsService } from '../../../../core/services/forms.service';
import { UnikFormGroupDirective } from '../../../../core/directives/unik-form.directive';
import { UnikFormFieldDirective } from '../../../../core/directives/unik-field.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'unik-form',
  standalone: true,
  templateUrl: './unik-form.component.html',
  hostDirectives: [
    {
      directive: UnikFormGroupDirective,
      inputs: ['name'],
    },
    {
      directive: UnikFormFieldDirective,
      inputs: ['formControlName'],
    },
  ],
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
  
  public myFormGroup$: FormGroup = new FormGroup({});

  constructor(private formsService: FormsService) {
    this.myFormGroup$ = this.formsService.formGroups;
  }
  
  ngOnInit(): void {
    this.formsService.addGroup(this.name);
  }

  ngAfterViewInit(): void {
    console.log(this.formsService.formGroups);
    this.formsService.addMessage(JSON.stringify(this.formsService.formGroups.getRawValue()));
  }

  public computedMessages = computed(() => {
    return this.formsService.messages();
  });
}
