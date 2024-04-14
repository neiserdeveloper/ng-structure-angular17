import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ORDERS_URL: string = environment.ordersUrl;
  constructor(private httpClient: HttpClient) { }
  
  getOrders(): Observable<any> {
    return this.httpClient.get(this.ORDERS_URL).pipe(res=> res);
  }
}
