import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[ngxTabbyHeader]',
  standalone: true,
})
export class NgxTabbyHeader {
  public tempRef = inject(TemplateRef);
}
