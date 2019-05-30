import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { EtsyPost } from './EtsyModel';
import { ApiServiceService } from './api-service.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class MatTableResolver implements Resolve<any> {
  constructor(private apiService: ApiServiceService) {}

  resolve():Observable<any> {
    return this.apiService.getListings().pipe(tap(value=> {console.log(value)}));
  }
}