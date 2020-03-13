import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CartDataService } from 'src/app/shared/services/cart-data.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: []
})
export class ProductsListComponent implements OnInit {

  productsList: any[];

  constructor( private productService: ProductsService, private cartDataService: CartDataService) { }

  ngOnInit() {
    this.productsList = this.productService.getProductList();
    console.log(this.productsList);
  }

  addToCartHandler(pdt) {
    console.log(pdt);

    // 1. connect to cart data service using dep inj
    // 2. pass the product to it
    this.cartDataService.updateCart(pdt);

  }

}
