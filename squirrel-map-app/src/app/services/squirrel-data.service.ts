import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Park } from 'src/app/models/park';
import { Squirrel } from '../models/squirrel';

@Injectable({
  providedIn: 'root'
})
export class SquirrelDataService {

  baseUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getParkData() {
    return this.http.get<Park[]>(this.baseUrl + "/parks");
  }

  getSquirrelData() {
    return this.http.get<Squirrel[]>(this.baseUrl + "/squirrels");
  }
}
