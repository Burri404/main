import { Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentTableComponent } from './student-table/student-table/students-table.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
     { path:'',  redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
    { path: 'test', loadComponent: () => import("./student-table/student-table/students-table.component").
     then((c)=> c.StudentTableComponent) },
    {
        path: "authgard",
        loadChildren: () => import("./modules/auth-guard/auth-guard.module").then((m) => m.AuthGuardModule),
        data  : { preload: false } 
    },
    {
        path: "testing",
        loadChildren: () => import("./modules/test/test.module").then((m) => m.TestModule),
        data  : { preload: true } 
    },
    { path: 'home', component: AppLayoutComponent},
    { path: 'header', component: HeaderComponent },
    { path: 'footer', component: FooterComponent},
    { path: 'studentrecord', component: StudentTableComponent}
];
