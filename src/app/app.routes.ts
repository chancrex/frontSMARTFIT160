import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landings/landing.component';
import { LandingModule } from './landings/landing.module';

export const app_routes: Routes = [
  //{path: '', component: HomeComponent},
  {path: '', component: LandingModule},
 
];

export const app_routing = RouterModule.forRoot(app_routes)