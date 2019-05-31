import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EtsyPost } from './EtsyModel';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url: string = "https://smp-backend-service.herokuapp.com/etsy/listings";

  constructor(private http: HttpClient) { }


  getListings() {
    return this.http.get<EtsyPost[]>(this.url);
  }
}
