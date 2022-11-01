import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/estudiante';

@Component({
  selector: 'app-registrar-estudiante',
  templateUrl: './registrar-estudiante.component.html',
  styleUrls: ['./registrar-estudiante.component.css']
})
export class RegistrarEstudianteComponent implements OnInit {

  estudiantes:Estudiante =new Estudiante();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.estudiantes);
  }

}
