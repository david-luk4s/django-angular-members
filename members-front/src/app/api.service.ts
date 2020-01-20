import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://127.0.0.1:8000/'
  token = 'Token 87e1925000dc2c11f20b7a5957b37e7642d96b72';
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
