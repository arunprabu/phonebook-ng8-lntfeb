import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // should load this one from db via services
  // -- now mocking it with static data
  private currentCartItem: any[] = [
    {
      id: 2,
      name: 'Cheese',
      category: 'Dairy',
      price: '$6.38'
    }
  ];

  // create an observable with the default item
  // ===============
  // 1. Create BehaviourSubject with default item
  private cartItemsList = new BehaviorSubject(this.currentCartItem);

  // 2. make it as observable so that other components can subscribe to it.
  latestCartItemsList: Observable<any[]> = this.cartItemsList.asObservable();
  // latestCartItemsList is subscribabale

  constructor() { }

  updateCart( pdt ) {
    console.log(pdt);
    // add the pdt to cartItemsList

    this.latestCartItemsList.pipe(take(1)).subscribe(val => {
      console.log(val);
      console.log(...val); // spread operator -- es2015
      const newArr = [...val, pdt];
      console.log(newArr);
      this.cartItemsList.next(newArr);
    });
  }
}
