import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IProduct } from './product';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productsUrl = '/api/products/products.json';

  constructor(private http: HttpClient) {

  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productsUrl).pipe(
      tap(products => products),
      catchError((err: HttpErrorResponse) => {
        let errMsg = '';
        if (err.error instanceof ErrorEvent) {
          errMsg = `An error occured: ${err.error.message}`;
        } else {
          errMsg = `Server returned err msg: ${err.error} with status code: ${err.message}`;
        }

        console.log(errMsg);
        return throwError(errMsg);
      })
    );
  }
}
