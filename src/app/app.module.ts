import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageRestaurantComponent } from './loginpage-restaurant/loginpage-restaurant.component';
import { SearchrestarantRestarantComponent } from './searchrestarant-restarant/searchrestarant-restarant.component';
import { ViewfoodRestaurantComponent } from './viewfood-restaurant/viewfood-restaurant.component';
import { PaymentResturantComponent } from './payment-resturant/payment-resturant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageRestaurantComponent,
    SearchrestarantRestarantComponent,
    ViewfoodRestaurantComponent,
    PaymentResturantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
