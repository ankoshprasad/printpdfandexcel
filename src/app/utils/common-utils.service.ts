import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonUtilsService {

  constructor() { }
  public static copyJSON(obj: any): any{
    return JSON.parse(JSON.stringify(obj));
  }
}
