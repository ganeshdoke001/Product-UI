import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Apiresponse } from '../interfaces/apiresponse';
import { Product } from '../interfaces/product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolveService implements Resolve<Apiresponse<Product[]>> {
  constructor(private service: ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<Apiresponse<Product[]>> {
    return this.service.getAllProducts();
  }
}
