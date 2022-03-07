import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { OrderToSend } from 'src/app/models/OrderToSend';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  orderData: OrderToSend = {
    id: 0,
    companyId: 0,
    created: '',
    createdBy: '',
    paymentMethod: '',
    totalPrice: 0,
    status: 0,
    orderRows: [],
  };

  constructor(private service: OrderService) {}

  ngOnInit(): void {
    this.service.fetchedOrders$.subscribe((orderData: OrderToSend) => {
      this.orderData = orderData;
    });
    this.service.getOrders();
    console.log(this.orderData);
  }
}
