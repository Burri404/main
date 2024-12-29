import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthGardComponent } from './auth-gard.component';

describe('AuthGardComponent', () => {
  let component: AuthGardComponent;
  let fixture: ComponentFixture<AuthGardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthGardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthGardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
