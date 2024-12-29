import { TestBed } from '@angular/core/testing';

import { StudentsRecordsService } from './students-records.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore } from '@ngrx/store/testing';

describe('StudentsRecordsService', () => {
  let service: StudentsRecordsService;



  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
       providers: [ provideMockStore({})]
    }).compileComponents();
    service = TestBed.inject(StudentsRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
