import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestingComponent } from './testing/testing.component';
import { Testing1Component } from './testing1/testing1.component';


@NgModule({
  declarations: [
    TestingComponent,
    Testing1Component
  ],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
