import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing/testing.component';
import { Testing1Component } from './testing1/testing1.component';

const routes: Routes = [{ 
   path: '', component: TestingComponent,
  //  children : [{
  //     path: 'testing1', component: 
  //  }]
  children: [
    {
        path: 'testing2',
        loadComponent: () => import('./testing1/testing1.component').then((c) => c.Testing1Component)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
