import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGardComponent } from '../../auth-gard/auth-gard.component';

const routes: Routes = [
  { path: '', component: AuthGardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthGuardRoutingModule { }
