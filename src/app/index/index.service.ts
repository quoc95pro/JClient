import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Idol } from "../_model/idol.model";
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000';

@Injectable()
export class IdolsService {

  constructor(private http: Http) { }

  public getLatestIdols(page: number = 1) {
    return this.http.get(`${BASE_URL}/api/idols/${page}`);
  }
}
