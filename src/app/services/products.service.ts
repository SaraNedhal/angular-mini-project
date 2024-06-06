import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PaginationParams , Products } from '../../types';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private apiService:ApiService) { 
  }

  // new function called getProducts = (takes the parameters of url of type string and params of type any and its expected to return of type observable )
  getProducts = (url: string , params: PaginationParams): Observable<Products> => {
    // makes a get request through apiService and in apiService we use httpClient so we don't have to call it every time i make a function
    return this.apiService.get(url,{
      params,
      responseType: 'json',
    });
  }

  addProduct = (url:string , body:any): Observable<any> => {
    return this.apiService.post(url,body,{});
  }
  editProduct = (url:string, body:any): Observable<any>=>{
    return this.apiService.put(url,body,{});
};

deleteProduct = (url:string): Observable<any> => {
  return this.apiService.delete(url,{});
}


}