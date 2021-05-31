import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BurgerCountService {
  public countOfMeat = 0;
  public countOfEgg = 0;
  public countOfOnions = 0;
  public countOfTomato = 0;
  public countOfCucumber = 0;
  public countOfLettuce = 0;

  private _bunPrice = 0.52;
  private _meatPrice = 1.94;
  private _eggPrice = 0.04;
  private _onionPrice = 0.02;
  private _tomatoPrice = 0.13;
  private _cucumberPrice = 0.05;
  private _lettucePrice = 0.12;

  constructor() {}

  get bunPrice(): number {
    return this._bunPrice;
  }

  get meatPrice(): number {
    return this._meatPrice;
  }

  get eggPrice(): number {
    return this._eggPrice;
  }

  get onionPrice(): number {
    return this._onionPrice;
  }

  get tomatoPrice(): number {
    return this._tomatoPrice;
  }

  get cucumberPrice(): number {
    return this._cucumberPrice;
  }

  get lettucePrice(): number {
    return this._lettucePrice;
  }
}
