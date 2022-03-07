import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { IMyOrders } from 'src/app/Interfaces.ts/IMyOrders';
import { OrderToSend } from 'src/app/models/OrderToSend';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  orderData: IMyOrders[] = [];

  //Man ska kunna titta på ordrarna

  //Man ska kunna ta bort ordrarna (dvs använda sig av delete??) genom att trycka på en knapp

  constructor(private service: OrderService) {}

  ngOnInit(): void {
    this.service.fetchedOrders$.subscribe((orderData: IMyOrders[]) => {
      this.orderData = orderData;
    });
    this.service.getOrders();
    console.log(this.orderData);
  }

  removeOrder(orderToDelete: number) {
    this.service.deleteOrder(orderToDelete);
  }
}
