import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EtsyPost } from './EtsyModel';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url: string = "assets/etsyListings.json";

  constructor(private http: HttpClient) { }


  getListings() {
    return this.http.get<EtsyPost[]>(this.url);
  }
}
