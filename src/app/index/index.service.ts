import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
const BASE_URL = 'http://localhost:3000';

@Injectable()
export class IdolsService {

  constructor(private http: Http) { }

   getLatestIdols(page: number = 1) {
  
    return this.http.get('http://localhost:3000/api/idols/1')
    .toPromise()
    .then(res => res.json())
    .then(resJson => resJson);
  }
}
