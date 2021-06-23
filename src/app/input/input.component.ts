import { Component, Input } from '@angular/core'; // First, import Input

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() item = ''; // decorate the property with @Input()
}