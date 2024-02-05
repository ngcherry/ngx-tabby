import { TemplateRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxTabbyBody } from './ngx-tabby-body.directive';

fdescribe('NgxTabbyBodyDirective', () => {
  it('should not create an instance without templateRef', () => {
    expect(() => {
      const _ = new NgxTabbyBody();
    }).toThrowError();
  });

  it('shoud create an instance with ng-template', () => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TemplateRef,
          useValue: {},
        },
      ],
    });

    TestBed.runInInjectionContext(() => {
      const _ = new NgxTabbyBody();
    });
  });
});
