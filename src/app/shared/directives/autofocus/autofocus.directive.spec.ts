import { ElementRef } from '@angular/core';
import { AutofocusDirective } from './autofocus.directive';

describe('AutofocusDirective', () => {
  it('should create an instance', () => {
    const elementRef = new ElementRef(document.createElement('input'));
    const directive = new AutofocusDirective(elementRef);
    expect(directive).toBeTruthy();
  });
});
