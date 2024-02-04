import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabbyItem } from './ngx-tabby-item.component';

describe('NgxTabbyItemComponent', () => {
  let component: NgxTabbyItem;
  let fixture: ComponentFixture<NgxTabbyItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTabbyItem]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxTabbyItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
