import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabbyGroup } from './ngx-tabby-group.component';

describe('NgxTabbyGroupComponent', () => {
  let component: NgxTabbyGroup;
  let fixture: ComponentFixture<NgxTabbyGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTabbyGroup]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxTabbyGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
