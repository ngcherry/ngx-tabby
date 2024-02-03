import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTabbyGroupComponent } from './ngx-tabby-group.component';

describe('NgxTabbyGroupComponent', () => {
  let component: NgxTabbyGroupComponent;
  let fixture: ComponentFixture<NgxTabbyGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxTabbyGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxTabbyGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
