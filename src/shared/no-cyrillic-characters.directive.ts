import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoCyrillicCharacters]'
})
export class NoCyrillicCharactersDirective {

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const inputValue = input.value;
    const newValue = inputValue.replace(/[^\x00-\x7F]/g, '');
    input.value = newValue;
  }
}
