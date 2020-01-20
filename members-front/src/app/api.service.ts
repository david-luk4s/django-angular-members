import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/'
  token = 'Token 293b771313e82aaf95009d49619e88a610f94ede';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

  constructor(private requests: HttpClient) { }

  getAllMembers() : Observable<any>{
      return this.requests.get(this.baseUrl+'members/',
      {headers: this.httpHeaders});
  };

  getMember(id) : Observable<any>{
      return this.requests.get(this.baseUrl+'members/'+id+'/',
      {headers: this.httpHeaders});
  };
}
