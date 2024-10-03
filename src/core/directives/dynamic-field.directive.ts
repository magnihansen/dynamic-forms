import {
  Directive,
  Input,
  OnInit,
} from '@angular/core';
import { FormsService } from '../services/forms.service';

@Directive({
  selector: '[formControlName]',
  standalone: true,
  providers: [FormsService],
})
export class DynamicFormFieldDirective implements OnInit {
  @Input() public formControlName!: string;

  constructor(private formsService: FormsService) {}

  ngOnInit(): void {
    this.formsService.addFieldToFormGroup('basic', typeof Number);
    this.formsService.addMessage('DynamicFormFieldDirective ' + this.formControlName);
  }
}
