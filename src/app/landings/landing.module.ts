import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar';
import { AppComponent } from '../app.component';
import { LandingComponent } from './landing.component';


@NgModule({
  declarations: [
    LandingComponent // tus componentes
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    // otros módulos
  ],
  providers: [],
  bootstrap: []
})
export class LandingModule { }
