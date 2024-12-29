import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { StudentsRecordsService } from './services/students-records.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule],
      providers: [provideMockStore({}), StudentsRecordsService ]
    }).compileComponents();
    
     fixture = TestBed.createComponent(AppComponent);
     component = fixture.componentInstance;
     fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'appcart' title`, () => {
    expect(component.title).toEqual('appcart');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, appcart');
  // });
});
