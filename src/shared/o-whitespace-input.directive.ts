import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoWhitespaceInput]'
})
export class NoWhitespaceInputDirective {

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    const newValue = inputValue.replaceAll(" ", '');
    input.value = newValue;
  }
}
