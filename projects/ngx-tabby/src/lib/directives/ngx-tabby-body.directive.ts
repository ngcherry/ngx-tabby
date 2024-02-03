import { Directive, TemplateRef, inject } from '@angular/core';

@Directive({
  selector: '[ngxTabbyBody]',
  standalone: true,
})
export class NgxTabbyBody {
  public tempRef = inject(TemplateRef);
}
