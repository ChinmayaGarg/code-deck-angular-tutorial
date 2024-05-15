import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) // this says: load AppComponent with configurations mentioned in appConfig
  .catch((err) => console.error(err));
