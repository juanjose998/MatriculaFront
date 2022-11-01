import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/estudiante';
import { EstudianteService } from 'src/app/Service/estudiante.service';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit {

  estudiantes:Estudiante[];
  constructor(private estudianteService:EstudianteService) { }

  ngOnInit(): void {
  
  this.obtenerEstudiantes();
  }



  private obtenerEstudiantes(){
    this.estudianteService.obtenerListaEstudiantes().subscribe(dato => {
      this.estudiantes = dato;
    })
  }

}
