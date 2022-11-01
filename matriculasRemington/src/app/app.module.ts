import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualizarEstudianteComponent } from './Components/actualizar-estudiante/actualizar-estudiante.component';
import { ListarEstudianteComponent } from './Components/listar-estudiante/listar-estudiante.component';
import { RegistrarEstudianteComponent } from './Components/registrar-estudiante/registrar-estudiante.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ActualizarEstudianteComponent,
    ListarEstudianteComponent,
    RegistrarEstudianteComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
