import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from "app/Model/Product";
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private productUrl = "http://localhost:53286/api/Product/";

  constructor(private http: Http) { }
  
  public getProductsByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get(this.productUrl + `GetProductsByCategory/` + categoryId)
      .map((res: Response) => res.json());
  }
}