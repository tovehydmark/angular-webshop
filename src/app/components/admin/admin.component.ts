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
    this.service.fetchedOrders$.subscribe((orderData: IMyOrders[]) => {
      this.orderData = orderData;
    });
    this.service.getOrders();
  }

  //MUST GET ORDERROWDETAILS IN HERE TOO

  removeOrder(orderToDelete: number) {
    this.service.deleteOrder(orderToDelete);
  }
}
