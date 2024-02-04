import { TestBed } from '@angular/core/testing';

import { NgxTabbyService } from './ngx-tabby.service';

fdescribe('NgxTabbyService', () => {
  let service: NgxTabbyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxTabbyService],
    });
    service = TestBed.inject(NgxTabbyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('selected Tab  must be zero on initialization', () => {
    expect(service.selectedTab()).toBe(0);
  });

  it('addTab should return unique number, for every call', () => {
    const tabId1 = service.addTab();
    const tabId2 = service.addTab();

    expect(tabId1).not.toBe(tabId2);
  });

  it('select tab should set the parameter to selectedTab', () => {
    const tabId = 22;

    service.selectTab(tabId);

    expect(service.selectedTab()).toBe(tabId);
  });

  it('isSelect should be true if tab is selected', () => {
    const tabId = 30;

    service.selectTab(tabId);

    expect(service.isSelected(tabId)).toBeTrue();
  });

  it('isSelect should be false if tab is not selected', () => {
    const tabId = 40;

    service.selectTab(30);

    expect(service.isSelected(tabId)).toBeFalse();
  });
});
