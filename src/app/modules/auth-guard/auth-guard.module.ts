import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuardRoutingModule } from './auth-guard-routing.module';
import { AuthGardComponent } from '../../auth-gard/auth-gard.component';
import { QuicklinkModule } from "ngx-quicklink";


@NgModule({
  declarations: [ AuthGardComponent ],
  imports: [
    CommonModule,
    AuthGuardRoutingModule,
    QuicklinkModule
  ]
})
export class AuthGuardModule { }
