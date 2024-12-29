import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, combineLatest, forkJoin, map,  Observable, of, tap, throwError } from 'rxjs';
import { StudentRecords } from '../modals/student-records';


@Injectable({
  providedIn: 'root'
})
export class StudentsRecordsService {

  constructor(private http: HttpClient) { 

  }

  testFockJoin(): Observable<any> {
    const firstApi = this.http.get<any>('http://localhost:3000/employees');
     const secondApi = this.http.get<any>('http://localhost:3000/studentsRecords');
    return forkJoin([firstApi,secondApi]).pipe(map((data :any) => { return data}),
     catchError( this.errorHandler )
    )
  }

  testLastCombine(): Observable<any> {
    const firstApi = this.http.get<any>('http://localhost:3000/employees');
     const secondApi = this.http.get<any>('http://localhost:3000/studentsRecords');
    return combineLatest(firstApi,secondApi).pipe(map((data :any) => { return data}),
     catchError( this.errorHandler )
    )
  }

  getJsonData(): Observable<any> {
  return this.http.get<any>('../assets/data.json').pipe(
   tap((data:any) => console.log(data)),
   map( (data:any) => { return data }),
   catchError((error:any) => { return error})
  )
}

  getStudentRecords(): Observable<StudentRecords[]> {
      return this.http.get<StudentRecords[]>('http://localhost:3000/studentsRecords');
  }

  getEmployeByID(id:any): Observable<any>{
    return this.http.get(`http://localhost:3000/employees?id=${id}`).pipe(
       tap(data=> console.log(data)),
       map(data => ({ data})),
       catchError(this.errorHandler
      ));
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof HttpErrorResponse) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
