import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'unik-form-submit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './unik-form-submit.component.html',
  styleUrl: './unik-form-submit.component.scss'
})
export class UnikFormSubmitComponent {
  @Input() submitText: string = 'Submit';
  @Output() submitted = new EventEmitter<void>();

  onSubmitted(): void {
    this.submitted.emit();
  }
}
