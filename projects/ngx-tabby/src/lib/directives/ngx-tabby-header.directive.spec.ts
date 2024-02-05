import { TemplateRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { NgxTabbyHeader } from './ngx-tabby-header.directive';

fdescribe('NgxTabbyHeaderDirective', () => {
  it('should not create an instance without templateRef', () => {
    expect(() => {
      const _ = new NgxTabbyHeader();
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
      const _ = new NgxTabbyHeader();
    });
  });
});
