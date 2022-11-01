import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarEstudianteComponent } from './Components/actualizar-estudiante/actualizar-estudiante.component';
import { ListarEstudianteComponent } from './Components/listar-estudiante/listar-estudiante.component';
import { RegistrarEstudianteComponent } from './Components/registrar-estudiante/registrar-estudiante.component';

const routes: Routes = [
  {path :'listarEstudiantes',component:ListarEstudianteComponent},
  {path :'actualizarEstudiantes',component:ActualizarEstudianteComponent},
  {path :'registrarEstudiantes',component:RegistrarEstudianteComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
