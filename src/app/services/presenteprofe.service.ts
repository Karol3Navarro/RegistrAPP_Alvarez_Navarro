import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresenteprofeService {
  private apiURL = 'https://www.presenteprofe.cl/api/v1';  

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const url = `${this.apiURL}/auth`;  
    const payload = {
      correo: username,
      password: password
    };
    return this.http.post(url, payload);
  }

  getCursos(username: string): Observable<any> {
    const url = `${this.apiURL}/cursos`;  
    const params = new HttpParams().set('user', username);
    return this.http.get<any>(url, { params });
  }

  getCursoById(cursoId: string): Observable<any> {
    const url = `${this.apiURL}/cursos/${cursoId}`; // Asegúrate de que 'apiURL' y 'cursos' sean correctos
    return this.http.get<any>(url);  // Llamada a la API para obtener el curso
  }
  
  
}
