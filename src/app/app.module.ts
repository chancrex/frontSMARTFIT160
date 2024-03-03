import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { app_routes } from './app.routes'; // Importa el módulo de enrutamiento
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { LandingComponent } from './landings/landing.component'; // Importa el componente app-landing

@NgModule({
  declarations: [
    AppComponent // Agrega el componente app-landing aquí
  ],
  imports: [
    BrowserModule,
    app_routes // Importa el módulo de enrutamiento
    // otros módulos de terceros pueden ir aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
