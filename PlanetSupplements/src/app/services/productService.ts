import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from "app/Model/Product";
import { CartViewModel } from "app/Model/CartViewModel";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  //private productUrl = "http://planetsupplementsapi.azurewebsites.net/api/Product/";

  private productUrl = "http://localhost:53286/api/Product/";

  constructor(private http: Http) { }

  public getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get(this.productUrl + `GetProductsByCategory/` + categoryId)
      .map((res: Response) => res.json());
  }

  public getProductsByIds(productIds: number[]): Observable<CartViewModel> {

    //TODO: Not a good way to send query string like below. Need to Pass as Object
    let queryString = null;
    for (var i = 0; i < productIds.length; i++) {
      if (i === 0) {
        queryString = "productIds=" + productIds[i];
      } else {
        queryString += "&productIds=" + productIds[i];
      }
    }

    return this.http.get(this.productUrl + `GetProductsByIds/?` + queryString)
      .map((res: Response) => res.json());
  }

  public getAllProducts(): Observable<Product[]> {
    return this.http.get(this.productUrl + `GetAllProducts`)
      .map((res: Response) => res.json());
  }
}