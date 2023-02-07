import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    <input [value]="value" (input)="onInput($event.target.value)">
  `
})
export class InputComponent {
  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  onInput(value: string) {
    this.value = value;
    this.valueChange.emit(value);
  }
}