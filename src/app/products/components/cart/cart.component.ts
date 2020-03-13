import { Component, OnInit } from '@angular/core';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent implements OnInit {

  latestCartItemsList: any[];

  constructor(private cartDataService: CartDataService) { }

  ngOnInit() {
    this.cartDataService.latestCartItemsList.subscribe( (cartItemsList: any[]) => {
      this.latestCartItemsList = cartItemsList;
    });
  }

}
