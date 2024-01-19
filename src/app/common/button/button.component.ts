import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() primary: boolean = true;
  @Input() inputType: string = 'button';
  @Output() onClick = new EventEmitter<MouseEvent>();

  onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }

  get buttonClass(): string {
    return this.primary ?
      'border rounded-md bg-blue-500 text-white py-2 px-4 font-medium hover:bg-blue-700 transition ease-out hover:ease-in'
      : 'border rounded-md bg-white p-2 text-blue-500 font-medium hover:bg-blue-500 hover:text-white transition ease-out hover:ease-in';
  }
}