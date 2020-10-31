import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { FoodsComponent } from './foods/foods.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestaurantsComponent } from './restaurants/restaurants.component';

@NgModule({
  declarations: [
    InputComponent,
    AppComponent,
    FoodsComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent, InputComponent, FoodsComponent]
})
export class AppModule { }
