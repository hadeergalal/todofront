import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutallComponent } from './logoutall.component';

describe('LogoutallComponent', () => {
  let component: LogoutallComponent;
  let fixture: ComponentFixture<LogoutallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
