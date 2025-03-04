import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTableComponent } from './students-table.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('StudentTableComponent', () => {
  let component: StudentTableComponent;
  let fixture: ComponentFixture<StudentTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTableComponent],
      providers: [provideMockStore({})]
      
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
