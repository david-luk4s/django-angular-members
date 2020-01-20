import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://3.210.185.144:8000/';
  token = 'Token 3dad955b8b74b5d898d7af6e9e2dce2a503e97e6';
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', this.token);

  constructor(private requests: HttpClient) { }

  getMember(id): Observable<any>{
    return this.requests.get(this.baseUrl+'members/'+id+'/',
    {headers: this.httpHeaders});
  };

  update(members): Observable<any>{
    let body = {name: members.name, surname: members.surname, email: members.email, address: members.address, phone: members.phone};

    return this.requests.put(this.baseUrl + 'members/' + members.id + '/', body,
    {headers: this.httpHeaders});
  };

  save(member): Observable<any>{
    return this.requests.post(this.baseUrl + 'members/', member,
    {headers: this.httpHeaders});
  };

  deleteMember = (id) => {
    return this.requests.delete(this.baseUrl + 'members/' + id + '/',
    {headers: this.httpHeaders});
  };
}
