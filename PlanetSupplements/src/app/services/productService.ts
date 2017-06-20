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

  obj: any;

  public getProductsByCategory(categoryId: number): Observable<any> {
   // let url = `http://localhost:53286/api/Product/GetProductsByCategory/` + categoryId;

    let adf = this.http.get(this.productUrl + `/GetProductsByCategory/` + categoryId)
      .map(response => response)
      .subscribe((res) => {
          this.obj = res.json();
          console.log(this.obj);
        },
        (err) => console.log(err),
        () => console.log("Done")
      );

    return (adf) as any;
    //  .get(`${this.baseUrl}Product/GetProductsByCategory/` + categoryId)
    //return this.http
    //  .get(`${this.baseUrl}Product/GetProductsByCategory/` + categoryId)
    //  .map((response: Response) => {
    //    let env: Product = response.json();
    //    return env;
    //  });
  }
}