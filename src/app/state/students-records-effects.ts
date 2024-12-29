import { Actions, createEffect, ofType} from '@ngrx/effects';
import { actionList } from './students-records-action';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, exhaustMap, map } from 'rxjs';
import { StudentsRecordsService } from '../services/students-records.service';


@Injectable({ providedIn: 'root' })
export class StudentRecordsEffects {
    loadStudentRecordsEffects$ = createEffect(
        () => this.actions$.pipe(
            ofType(actionList.callStudentsRecordsApi),
            exhaustMap(() => this.studentrecord.getStudentRecords().pipe(
             map(studentRecords => ({
                 type: actionList.callStudentsRecordsApiSuccess, 
                 payload: studentRecords})),
             catchError(() => EMPTY)
            ))
        )
    );

    constructor(private actions$: Actions,
         private studentrecord: StudentsRecordsService){
    }
}