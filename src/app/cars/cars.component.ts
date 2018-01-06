import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars: [{name: string, year: number}] = [{
    name: 'Ford',
    year: 2015
  }, {
    name: 'Mazda',
    year: 2016
  }, {
    name: 'BMW',
    year: 2014
  }, {
    name: 'Merceders',
    year: 2017
  }, {
    name: 'Ferrari',
    year: 2018
  }
 ];

  constructor() {
    
  }

  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }
}
