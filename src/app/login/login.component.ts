import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { StudentsRecordsService } from '../services/students-records.service';
import { combineLatest, from, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { StudentTableComponent } from '../student-table/student-table/students-table.component';
import { AuthGuardModule } from '../modules/auth-guard/auth-guard.module';
import { QuicklinkDirective } from 'ngx-quicklink';


@Component({
  selector: 'saudia-login',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, RouterModule, StudentTableComponent, AuthGuardModule, QuicklinkDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  public isLoading = true;
  constructor(private student: StudentsRecordsService) {

  }

  ngOnInit() {
     this.student.getJsonData().subscribe(
      (data:any)=> console.log(data),
       (error) => console.log(error),
       () => { console.log('completed')}
    );

    //forkJoin
    this.student.testFockJoin().subscribe( (data:any) => {
      console.log('fockjoin', data);
            const [empolyee, student] = data;
            console.log(empolyee);
            console.log(student);
       });

       this.student.testLastCombine().subscribe( (data:any) => {
        console.log('combine latest', data);
             // const [empolyee, student] = data;
             // console.log(empolyee);
              //console.log(student);
         });

         combineLatest(of([1,2,3])).subscribe( (data)=> console.log('sample test', data));
  }
}
