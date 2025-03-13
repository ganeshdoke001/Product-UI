import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apiresponse } from '../interfaces/apiresponse';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  URL: string = 'http://localhost:8200/api/v1/products';
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Apiresponse<Product[]>> {
    return this.http.get<Apiresponse<Product[]>>(`${this.URL}`);
  }
  getProductDetatilsById(id: number): Observable<Apiresponse<Product>> {
    return this.http.get<Apiresponse<Product>>(`${this.URL}/${id}/productId`);
  }
  getProductDetatilsByName(name: string): Observable<Apiresponse<Product>> {
    return this.http.get<Apiresponse<Product>>(
      `${this.URL}/${name}/productName`
    );
  }
  saveProduct(product: Product): Observable<Apiresponse<String>> {
    return this.http.post<Apiresponse<String>>(`${this.URL}`, product);
  }
  updateProduct(id: number, product: Product): Observable<Apiresponse<String>> {
    const params = new HttpParams().set('id', id);
    return this.http.post<Apiresponse<String>>(`${this.URL}`, product, {
      params,
    });
  }
  deleteProduct(id: number): Observable<Apiresponse<String>> {
    const params = new HttpParams().set('id', id);
    return this.http.delete<Apiresponse<String>>(`${this.URL}`, { params });
  }
}
