import {
  AfterViewInit,
  Directive,
  Input,
} from '@angular/core';
import { FormsService } from '../services/forms.service';

@Directive({
  selector: 'form',
  // host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
  // exportAs: 'ngForm',
  standalone: true,
  providers: [FormsService],
})
export class UnikFormGroupDirective implements AfterViewInit {
  @Input({ required: true }) public name!: string;

  constructor(private formsService: FormsService) {}

  ngAfterViewInit(): void {
    // this.formsService.generateFormGroup();
  }
}
