import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // remove mock API for live testing
  configUrl = 'http://localhost:3000/data';

  constructor(private http: HttpClient) { }

  RetrieveTemplate() {
    return this.http.get(this.configUrl);
  }
}
