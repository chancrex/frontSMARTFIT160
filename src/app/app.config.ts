import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { app_routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(app_routes)]
};
