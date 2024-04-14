import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OrdersService } from './services/orders.service';
import { OrdersInterface } from './interfaces/orders.interface';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export default class OrdersComponent {

  ordersList: OrdersInterface[]=[];

  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.getOrders()
  }

  getOrders() {
    this.ordersService.getOrders().subscribe({
      next: (result) => {
        this.ordersList = result;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }
}
