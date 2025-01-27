import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { reducers } from './store/reducers'; 
import { appEffects } from './store/effects';
import { localStorageMetaReducer } from './store/meta-reducers/localStorageMetaReducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideCharts(withDefaultRegisterables()),
    provideToastr({
      timeOut: 3000,
      positionClass: 'toast-bottom-left',
      progressBar: true,
    }),
    provideAnimations(),
    provideStore(reducers, {
      metaReducers: [localStorageMetaReducer]
    }),
    provideEffects(appEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
  ],
};
