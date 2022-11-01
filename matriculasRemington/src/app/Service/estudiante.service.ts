import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from '../estudiante';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

//LIstA DE ESTUDIANTES
private  baseUrl1="http://localhost:8080/estudiante/listarEstudiantes";

  constructor(private http:HttpClient) { }


  obtenerListaEstudiantes():Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(`${this.baseUrl1}`);
  }
}
