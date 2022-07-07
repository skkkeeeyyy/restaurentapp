import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageRestaurantComponent } from './loginpage-restaurant/loginpage-restaurant.component';
import { SearchrestarantRestarantComponent } from './searchrestarant-restarant/searchrestarant-restarant.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageRestaurantComponent,
    SearchrestarantRestarantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
