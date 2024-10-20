import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresenteprofeService {
  private apiURL = 'https://www.presenteprofe.cl/api/v1';
  constructor(private http: HttpClient) { }


  login(username: string, password: string):Observable<any>{
    const url = this.apiURL+"/auth";
    const payload ={
      correo: username,
      password: password
    }
    return this.http.post(url, payload);
  }
}