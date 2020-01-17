import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api-core/';
  httpHeaders = new HttpHeaders();

  constructor(private requests: HttpClient) { }

  getMember(id): Observable<any>{
    return this.requests.get(this.baseUrl+'members/'+id+'/',
    {headers: this.httpHeaders});
  };
}
