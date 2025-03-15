import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';

import { provideHttpClient,  withInterceptors } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';
import { tokenInterceptor } from './app/utils/token.interceptor';

bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes),  provideAnimations(), // required animations providers
    provideToastr(),  // required animations providers
    provideHttpClient(withInterceptors([tokenInterceptor])) 
  ]
}).catch((err) => console.error(err));
