import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
const BASE_URL = 'http://localhost:3000';

@Injectable()
export class IdolsService {

  constructor(private http: Http) { }

  getLatestIdols(page: number = 1) {

    return this.http.get(`${BASE_URL}/api/idols/${page}`)
      .toPromise()
      .then(res => res.json())
      .then(resJson => resJson);
  }



}
