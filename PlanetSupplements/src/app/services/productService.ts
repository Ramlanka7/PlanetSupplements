import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Product } from "app/Model/Product";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private baseUrl = "http://localhost:53286/api/";

  constructor(private http: Http) { }

  public getProductsByCategory(categoryId: number): Observable<Product> {
    return this.http
      .get(`${this.baseUrl}Product/GetProductsByCategory/` + categoryId)
      .map((response: Response) => {
        let env: Product = response.json();
        return env;
      });
  }
}