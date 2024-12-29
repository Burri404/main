import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { StudentTableComponent } from '../student-table/student-table/students-table.component';

@Component({
  selector: 'saudia-app-layout',
  standalone: true,
  imports: [HeaderComponent, AppLayoutComponent,StudentTableComponent],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

}

