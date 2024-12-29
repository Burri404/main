import { Component, computed, OnDestroy, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { concat, concatMap, delay, exhaustMap, from, interval, map, mergeMap, Observable, of,  single,  Subject, switchMap, take, takeUntil, takeWhile, tap, timer } from 'rxjs';
import { StudentsRecordsService } from './services/students-records.service';
import { StudentTableComponent } from './student-table/student-table/students-table.component';

@Component({
  selector: 'saudia',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatSlideToggleModule,StudentTableComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'appcart';
 // takeuntile:Observable | null;
 //let sub = new Subject();
   sub = new Subject();
  result: number = 0;
  sample = signal(2);
  message = signal<string[]>(['dfdf']);
  //const count: WritableSignal<number> = signal(0);

  //count.set(3);

  data!: Observable<number>;
  constructor(private studentRecordService: StudentsRecordsService){
 
    let callmethod = (operator:any) => ()=>  {
       from([0,1,2,3,4,5]).pipe( 
        operator( (x:any) => of(x).pipe(delay(500)))
        ).subscribe( data => console.log('opeators', data))
    }

  callmethod(exhaustMap)();
  }
  ngOnInit(): void {
    let value = 0;
     //return basic observable
const sample = (val:any) => of(val).pipe(delay(5000));
//dfdf
//convert basic observable to promise
const example = sample('First Example').toPromise().then((result:any) => {
    console.log('From Promise:', result);
  });


    //this.sample = signal('5');
   // this.sample = this.sample.set(this.sample()+1);
    
    let sum1 = [1,2,3,4];
    console.log(sum1[1]);
    let result =  sum1.slice(1);
  console.log(result);

 //const months = ['Jan', 'March', 'April', 'June'];
 //months.splice(1, 0, 'Feb');
 //console.log(months);

 //let newarr = sum1.splice(2,0, 9);
 //console.log('splice', newarr);
    //const a = interval(20000);
    //const notifier = timer(10000);
  //cancate map

  //http://localhost:3000/employees/1

  this.studentRecordService.getEmployeByID('1').subscribe({
     next: data => { console.log(data)},
     error: err => { console.log(err)},
     complete: () => { console.log('completed')}
  });
  

    const canCatMAp = from([1,2,3]).pipe(tap( data => console.log(data)),
       mergeMap((data:any) => this.studentRecordService.getEmployeByID(data)
    )
  );

   canCatMAp.subscribe( data => console.log('cancate data', data));
   
  
     
  }
  start(){
    let doubleCounter = computed(()=> this.sample() * 2 );

    //console.log(doubleCounter());
   // this.sample.set(this.sample()+1);
    this.sample.update((prev)=> prev + 1 );
   // const timer1 = interval(1000).pipe(take(3)); // Emits 0, 1, 2 every second, limited to 3 emissions
    //const timer2 = interval(2000).pipe(take(2)); // Emits 0, 1 every 2 seconds, limited to 2 emissions
    
    //const result = concat(timer1, timer2);
     
//    this.data = interval(1000).pipe(takeWhile((value) => value < 10));

    this.data.subscribe(
      (data: any) => {
      console.log('data', data);
       this.result = data;
    },
    (err: any) => console.log(err),
    () => console.log('done')
   )
  }
  end(){
    this.sub.next(true);
  }
  ngOnDestroy(){
    this.sub.next(true);
    this.sub.complete();
  }
}


