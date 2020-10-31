import { Component, OnInit } from '@angular/core';
import { data, Food } from './food';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {
  FoodItems = data.food;
  selectFood: Food;
  constructor() {
    localStorage.setItem('dados', JSON.stringify(data));
  }

  ngOnInit(): void {

  }
  all(): Food {
    const { food: [{id, title, price, cuisine}] } = data;
    const food = {id, title, price, cuisine};
    return food;
  }
  onSelect(cuisine: string): void {
    data.food.filter(item => item.cuisine);
  }
}
