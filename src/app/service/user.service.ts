import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../model/person';
import { Country } from '../model/country';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8082/rest/demo/person';
  }

  public findAll(): Observable<Person[]> {
    return this.http.get<Person[]>(this.usersUrl);
  }

  public save(person: Person) {
    return this.http.post<Person>(this.usersUrl, person);
  }
}
