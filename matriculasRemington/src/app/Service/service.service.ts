import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http:HttpClient) { }

  Url="http://localhost:8080/";
  Url1="http://localhost:8080/estudiante";
  Url2="http://localhost:8080/docente";


  getEstudiantes(){
  }

}
