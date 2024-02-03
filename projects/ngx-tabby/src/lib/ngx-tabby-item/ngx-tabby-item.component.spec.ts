import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabbyItemComponent } from './ngx-tabby-item.component';

describe('NgxTabbyItemComponent', () => {
  let component: NgxTabbyItemComponent;
  let fixture: ComponentFixture<NgxTabbyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTabbyItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxTabbyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
