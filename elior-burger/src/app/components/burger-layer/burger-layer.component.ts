import { Component, OnInit } from '@angular/core';
import { BurgerCountService } from 'src/app/services/burger-count.service';

@Component({
  selector: 'app-burger-layer',
  templateUrl: './burger-layer.component.html',
  styleUrls: ['./burger-layer.component.css'],
})
export class BurgerLayerComponent implements OnInit {
  price: number = this.burgerCountService.bunPrice;

  constructor(private burgerCountService: BurgerCountService) {}

  ngOnInit(): void {}

  public numOfMeat() {
    return this.burgerCountService.countOfMeat;
  }

  public numOfEgg() {
    return this.burgerCountService.countOfEgg;
  }

  public numOfOnions() {
    return this.burgerCountService.countOfOnions;
  }

  public numOfTomato() {
    return this.burgerCountService.countOfTomato;
  }

  public numOfCucumber() {
    return this.burgerCountService.countOfCucumber;
  }

  public numOfLettuce() {
    return this.burgerCountService.countOfLettuce;
  }

  public addEgg() {
    this.burgerCountService.countOfEgg++;
    const result = this.price + this.burgerCountService.eggPrice;
    this.price = parseFloat(result.toFixed(2));
  }

  public removeEgg() {
    if (this.burgerCountService.countOfEgg > 0) {
      this.burgerCountService.countOfEgg--;
      const result = this.price - this.burgerCountService.eggPrice;
      this.price = parseFloat(result.toFixed(2));
    }
  }

  public addMeat() {
    this.burgerCountService.countOfMeat++;
    const result = this.price + this.burgerCountService.meatPrice;
    this.price = parseFloat(result.toFixed(2));
  }

  public removeMeat() {
    if (this.burgerCountService.countOfMeat > 0) {
      this.burgerCountService.countOfMeat--;
      const result = this.price - this.burgerCountService.meatPrice;
      this.price = parseFloat(result.toFixed(2));
    }
  }

  public addOnion() {
    this.burgerCountService.countOfOnions++;
    const result = this.price + this.burgerCountService.eggPrice;
    this.price = parseFloat(result.toFixed(2));
  }

  public removeOnion() {
    if (this.burgerCountService.countOfOnions > 0) {
      this.burgerCountService.countOfOnions--;
      const result = this.price - this.burgerCountService.eggPrice;
      this.price = parseFloat(result.toFixed(2));
    }
  }

  public addTomato() {
    this.burgerCountService.countOfTomato++;
    const result = this.price + this.burgerCountService.tomatoPrice;
    this.price = parseFloat(result.toFixed(2));
  }

  public removeTomato() {
    if (this.burgerCountService.countOfTomato > 0) {
      this.burgerCountService.countOfTomato--;
      const result = this.price - this.burgerCountService.tomatoPrice;
      this.price = parseFloat(result.toFixed(2));
    }
  }

  public addCucumber() {
    this.burgerCountService.countOfCucumber++;
    const result = this.price + this.burgerCountService.cucumberPrice;
    this.price = parseFloat(result.toFixed(2));
  }

  public removeCucumber() {
    if (this.burgerCountService.countOfCucumber > 0) {
      this.burgerCountService.countOfCucumber--;
      const result = this.price - this.burgerCountService.cucumberPrice;
      this.price = parseFloat(result.toFixed(2));
    }
  }

  public addLettuce() {
    this.burgerCountService.countOfLettuce++;
    const result = this.price + this.burgerCountService.lettucePrice;
    this.price = parseFloat(result.toFixed(2));
  }

  public removeLettuce() {
    if (this.burgerCountService.countOfLettuce > 0){
      this.burgerCountService.countOfLettuce--;
      const result = this.price - this.burgerCountService.lettucePrice;
      this.price = parseFloat(result.toFixed(2));
    }
     
  }
}
