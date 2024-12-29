import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { studentReducer } from './state/students-records-reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideEffects } from '@ngrx/effects';
import { StudentRecordsEffects } from "./state/students-records-effects";
import { QuicklinkStrategy } from 'ngx-quicklink';

export const appConfig: ApplicationConfig = {
  providers: [
  provideRouter(routes, withPreloading(QuicklinkStrategy)
),
  
  provideClientHydration(),
  provideHttpClient(),
  provideStore(),
  provideState({
  name: 'studentRecords',
  reducer: studentReducer
  }),
  provideEffects(StudentRecordsEffects),
  provideAnimationsAsync(),
  provideStoreDevtools({ maxAge: 25, logOnly: false})
]
};
