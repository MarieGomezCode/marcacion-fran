import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { BotonComponent } from './components/boton/boton.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    BienvenidoComponent,
    BotonComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//FormsModule es un módulo de Angular que proporciona directivas y servicios que son
// esenciales para trabajar con formularios en Angular

//HttpClientModule es un módulo de Angular que proporciona el cliente HTTP de Angular
