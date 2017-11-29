import { Component, OnInit } from '@angular/core';

import { Car } from './car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[];
  selectedCar: Car;
  constructor() { }

  ngOnInit() {
    this.cars = [
      {id: 10, manufacturer: 'BMW', model: 'M5', productionYear: 1970},
      {id: 14, manufacturer: 'Audi', model: 'A5', productionYear: 2012},
      {id: 19, manufacturer: 'Ford', model: 'Mustang', productionYear: 1964},
      {id: 21, manufacturer: 'Dodge', model: 'Ram', productionYear: 2007},
      {id: 23, manufacturer: 'Fiat', model: '126', productionYear: 1977}
    ];
  }

  onSelect(car: Car) {
    this.selectedCar = car;
  };

}
