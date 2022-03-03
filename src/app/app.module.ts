import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './components/start/start.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { BasketComponent } from './components/basket/basket.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AdminComponent } from './components/admin/admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    ProductsComponent,
    ProductComponent,

    BasketComponent,
    HeaderComponent,
    FooterComponent,
    CheckOutComponent,
    AdminComponent,
    NotFoundComponent,
    CustomerFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
