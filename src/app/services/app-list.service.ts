import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  fetchAppsPage(): any {
    return this.http.get(`http://play.google.com/store/apps/collection/topselling_free`,  { responseType: 'text' });
  }

}
