import {
  Directive,
  Input,
  OnInit,
} from '@angular/core';
import { FormsService } from '../services/forms.service';

@Directive({
  selector: 'form',
  // host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
  // exportAs: 'ngForm',
  standalone: true,
  providers: [FormsService],
})
export class DynamicFormGroupDirective implements OnInit {
  @Input({ required: true }) public name!: string;

  constructor(private formsService: FormsService) {}

  ngOnInit(): void {
    console.log('ngOnInit', this.name);
    // this.formsService.addGroup(this.name);
    this.formsService.addMessage('DynamicFormGroupDirective ' + this.name);
  }
}
