import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonserviceRestapiService } from '../restapi/commonservice-restapi.service';
import { environment } from 'src/environments/environment';
import { REST_API_CONTEXT_PATHS, URLS } from '../constants/app-constants';
import { RestService } from '../restapi//rest.service';
import { expensesDataModel } from '../models/document.model';
@Injectable({
  providedIn: 'root'
})
export class CommonserviceService extends RestService {
  constructor(public override http: HttpClient) {
    super(http);
  }
  /*Use this common variable for any type of API calling*/
  apiURL: string = environment.rest_api_domain;
  /*Use this function only for GET API without parameter and document verifier related API */
  getApiUrl(urlKey: string, ...urlParam: string[]) {
    let url: string = environment.rest_api_domain + REST_API_CONTEXT_PATHS.EXPENSES_DATA_REST_URL;
    urlParam.unshift(url);
    return this.getApiPath(urlKey, ...urlParam);
  }

  /* Authguard test */
  login() {
    let url = this.apiURL + REST_API_CONTEXT_PATHS.EXPENSES_DATA_REST_URL;
    return this.http.get(url).pipe(map((res: any) => {
      let resData = res;
      return resData;
    }));
  }
 /* Expenses Doc GET API Example */
 getApi(): Observable<any | null> {
  let url = 'https://jsonplaceholder.typicode.com/todos/'
  return this.http.get(url).pipe(map((res: any) => {
    let resData = res;
    return resData;
  }));
}
  /* Get API Example */
  getsampleprojectFilterDetailsData(monthVal: string, yearVal: number): Observable<expensesDataModel | null> {
    let getapiUrl = this.apiURL + REST_API_CONTEXT_PATHS.EXPENSES_DATA_REST_URL + '?year=' + yearVal + "&month=" + monthVal;
    return this.http.get(getapiUrl).pipe(map((res: any) => {
      let resData = res;
      return resData;

    }));
    /* return this.get(this.getApiUrl(URLS.EXPENSES_DATA), {}).pipe(
       map((response: any) => {
         let resData: any = response;
         return resData;
       }));
       */
  }


  /* Post API Sample*/
  entersampleprojectData(requestVal: any): Observable<any | null> {
    let postapiURL = this.apiURL + REST_API_CONTEXT_PATHS.ADD_DETAILS_REST_URL;
    return this.http.post(postapiURL, requestVal).pipe(
      map(response => {
        return response;
      }));
  }

  /* Expenses Doc GET API Example */
  expensedoclist(): Observable<expensesDataModel | null> {
    let getapiUrl = this.apiURL + REST_API_CONTEXT_PATHS.EXPENSES_DATA_REST_URL;
    let url = 'http://localhost/REST-API/items/expenses'
    return this.http.get(url).pipe(map((res: any) => {
     
      let resData = res;
      return resData;
    }));
  }

/* Expenses Doc submit API Example */
submitexpense(requestVal: any): Observable<any | null> {
  let postapiURL = this.apiURL + REST_API_CONTEXT_PATHS.ADD_DETAILS_REST_URL;
  return this.http.post(postapiURL, requestVal).pipe(
    map(response => {
      return response;
    }));
}
}
