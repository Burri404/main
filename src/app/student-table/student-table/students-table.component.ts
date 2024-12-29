import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Observable } from 'rxjs';
import { StudentRecords } from '../../modals/student-records';
import { Store } from '@ngrx/store';
import { AppState, selectAll } from '../../state/students-records-selector';
import { StudentsRecordsService } from '../../services/students-records.service';
import  *  as Actions from '../../state/students-records-action';

@Component({
  selector: 'saudia-student-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './students-table.component.html',
  styleUrl: './students-table.component.scss'
})
export class StudentTableComponent implements OnInit{
  public dataSource:StudentRecords[]  = [];
  public dataSource$ : Observable<StudentRecords[]> = this.store.select(selectAll);
  public displayColumns: string[] = ['name', 'city', 'country', 'subject', 'passportDeclaration', 
    'fitnessDeclaration', 'courseName', 'date', 'state', 'street', 'email', 'phone', 'postalCode'];

  constructor(private store: Store<AppState>, private studentSerive: StudentsRecordsService){
    this.store.dispatch(Actions.callStudentsRecordsApi());
  }

  ngOnInit(): void {
    this.studentSerive.getStudentRecords().subscribe(
      (res: any) => {
          this.dataSource = res;
          console.log('student records', res);
      } 
  );
  }

}
