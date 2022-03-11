import { Component, OnInit } from '@angular/core';
import { IMyOrders } from 'src/app/Interfaces.ts/IMyOrders';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  orderData: IMyOrders[] = [];

  constructor(private service: OrderService) {}

  ngOnInit(): void {
    this.getOrderList();
  }

  //ENABLES ADMIN TO REMOVE ORDER
  removeOrder(orderToDelete: number) {
    this.service.deleteOrder(orderToDelete);
  }

  //GETS THE LIST OF ORDERS FROM THE ORDER API
  getOrderList() {
    this.service.fetchedOrders$.subscribe((orderData: IMyOrders[]) => {
      this.orderData = orderData;
    });
    this.service.getOrders();
  }
}
