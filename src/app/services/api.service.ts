import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Options, Product} from '../../types'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
// make rest api calls to specific url

  constructor(private httpClient: HttpClient) 
  {  }

  // get method <T> is a generic type, hte type will be determined when the function is called
  // return observable of type T
  get<T>(url: string , options:Options): Observable<T> {
    return this.httpClient.get<T>(url,options) as Observable<T>;
  }

  // post<T>(url:string , options)

  post<T>(url: string , body:Product, options:Options): Observable<T> {
    return this.httpClient.post<T>(url, body, options) as Observable<T>;
}

put<T>(url: string , body:Product , options:Options): Observable<T> {
  return this.httpClient.put<T>(url,body,options) as Observable<T>;


}


delete<T>(url: string , options:Options): Observable<T> {
  return this.httpClient.delete<T>(url,options) as Observable<T>;
}



}