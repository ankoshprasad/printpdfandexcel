import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REST_API_PATHS } from '../constants/app-constants';
import { CommonUtilsService } from '../utils/common-utils.service';
import { String } from 'typescript-string-operations';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class RestService {
// "@angular/http": "^7.2.16",
  constructor(public http: HttpClient) { }
  
  getApiPath(urlKey: string, ...urlParam: string[]) {
    let apiObj = CommonUtilsService.copyJSON(REST_API_PATHS);
    return _.extend(apiObj[urlKey], { rest: String.Format(apiObj[urlKey]["rest"], ...urlParam) });
  }

  getUrl(urlObj: any): any {
    const _url: string = urlObj.rest;
    return _url;
  }

  get(url: any, params: any): Observable<any> {
    return this.http.get(this.getUrl(url), params);
  }

  post(url: any, data: any, params: any): Observable<any> {
    return this.http.post(this.getUrl(url), data, params);
  }

  delete(url: any, params: any): Observable<any> {
    return this.http.delete(this.getUrl(url), params);
  }

  put(url: any, data: any, params: any): Observable<any> {
    return this.http.put(this.getUrl(url), data, params);
  }
}
